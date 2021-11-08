const AWS = require("aws-sdk");
const sharp = require("sharp");

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  const Bucket = event.Records[0].s3.bucket.name; // HomeTownAlba
  const Key = decodeURIComponent(event.Records[0].s3.object.key); //파임명/파일 , 한글로 파일 올렸을 경우 문제 해결
  console.log(Bucket, Key);
  const filename = Key.split("/")[Key.split("/").length - 1]; //파일명만 따로 추출
  const ext = Key.split(".")[Key.split(".").length - 1].toLowerCase(); //대문자 확장자 에러 해결
  const requiredFormat = ext === "jpg" ? "jpeg" : ext;
  console.log("filename", filename, "ext", ext);

  try {
    const s3Object = await s3.getObject({ Bucket, Key }).promise(); // 버킷 권한정책에서 설정한 getObject
    console.log("original", s3Object.Body.length);
    const resizedImage = await sharp(s3Object.Body) //sharp로 리사이징 진행
      .resize(400, 400, { fit: "inside" })
      .toFormat(requiredFormat)
      .toBuffer();
    await s3
      .putObject({
        // 버킷 권한정책에서 설정한 putObject
        Bucket,
        Key: `thumb/${filename}`, // 이미지 업로드하는동안 빠르게 보여줄 이미지
        Body: resizedImage,
      })
      .promise();
    console.log("put", resizedImage.length);
    return callback(null, `thumb/${filename}`); //성공 (error = null,파일이름)
  } catch (error) {
    console.error(error);
    return callback(error);
  }
};
