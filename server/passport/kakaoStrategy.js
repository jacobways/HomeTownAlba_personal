const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const { JobSeeker } = require("../models");

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao profile", profile); //카카오 프로필 불러오는곳
        try {
          const exUser = await JobSeeker.findOne({
            where: { userId: profile.id, type: "K" },
          }); //회원가입 여부 확인
          if (exUser) {
            done(null, exUser); // 이미 회원가입 되어있으면 바로 로그인 시킴
          } else {
            const newUser = await JobSeeker.create({
              userId: profile.id,
              email: profile._json && profile._json.kakao_account.email,
              name: profile.displayName,
              gender:
                profile._json && profile._json.kakao_account.gender === "male"
                  ? "남자"
                  : "여자",
              type: "K",
              image: profile._json && profile._json.properties.thumbnail_image,
            });
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
