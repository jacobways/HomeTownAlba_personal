import React from "react";

function LoadingModal() {
  return (
    <>
      <div
        style={{
          fontSize: "1rem",
          marginBottom: "0px",
          fontWeight: 900,
        }}
      >
        인증메일이 도착할때까지
      </div>
      <div
        style={{
          fontSize: "1rem",
          marginBottom: "0px",
          fontWeight: 900,
        }}
      >
        잠시만 기다려주세요
      </div>
    </>
  );
}

export default LoadingModal;
