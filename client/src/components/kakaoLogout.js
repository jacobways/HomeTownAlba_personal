const { Kakao } = window;
function KakaoLogout() {
  const logOutHandler = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(Kakao.Auth.getAccessToken());
      Kakao.Auth.logout(console.log(Kakao.Auth.getAccessToken()));
    }
  };
  return (
    <>
      {" "}
      <div>
        <button
          onClick={() => {
            logOutHandler();
          }}
        >
          로그아웃
        </button>
      </div>
    </>
  );
}
export default KakaoLogout;
