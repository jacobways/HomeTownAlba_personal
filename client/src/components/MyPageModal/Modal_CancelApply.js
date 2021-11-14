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
  display: -webkit-flex;
  place-items: center;
  width: 30%;
`;

function CancelApplyModal({ CancelApply, jobId }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    CancelApply(jobId);
  };

  return (
    <>
      <button className="bubbly-button" id="chat" onClick={openModalHandler}>
        {isOpen === false ? "지원 취소" : "지원 취소중"}
      </button>
      {isOpen === true ? (
        <ModalBackdrop>
          <span>취소하시겠습니까?</span>
          <button id='left' className="bubbly-button" onClick={CloseModalHandler}>
            아니요
          </button>
          <button className="bubbly-button" onClick={CloseAndDeleteHandler}>
            예
          </button>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default CancelApplyModal;
