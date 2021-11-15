import React, { useState } from "react";

import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: relative;
  z-index: 999;
  width: 20rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0rem;
  align-items: center;
`;

function RejectApplyModal({ idx, jobId, jobSeekerId, RejectApply }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    RejectApply(idx, jobId, jobSeekerId);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button className="login-btn" onClick={openModalHandler}>
        {isOpen === false ? "지원거절" : "지원거절중"}
      </button>
      {isOpen === true ? (
        <ModalBackdrop>
          <span style={{ color: "red", fontSize: "14px", fontWeight: 600 }}>
            지원을 거절하시겠습니까?
          </span>
          <button
            id="left"
            className="login-btn login-btn-custom"
            onClick={CloseModalHandler}
          >
            아니요
          </button>
          <button
            className="login-btn login-btn-custom"
            onClick={CloseAndDeleteHandler}
          >
            지원 거절하기
          </button>
        </ModalBackdrop>
      ) : null}
    </div>
  );
}

export default RejectApplyModal;
