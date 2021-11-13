import axios from "axios";
import React, { useState, useEffect } from "react";

import styled from "styled-components";

export const ModalBackdrop = styled.div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

function WithdrawCompany({ WithdrawCompany }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    WithdrawCompany();
  };

  return (
    <>
      <button id="left" className="bubbly-button" onClick={openModalHandler}>
        {isOpen === false ? "회원탈퇴" : "탈퇴중"}
      </button>
      {isOpen === true ? (
        <ModalBackdrop>
          <span>정말 탈퇴하시겠습니까?</span>
          <button
            id="left"
            className="bubbly-button"
            onClick={CloseModalHandler}
          >
            아니요
          </button>
          <button className="bubbly-button" onClick={CloseAndDeleteHandler}>
            탈퇴하기
          </button>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default WithdrawCompany;
