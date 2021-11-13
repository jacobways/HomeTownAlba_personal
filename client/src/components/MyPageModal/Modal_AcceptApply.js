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
`;

function AccpetApplyModal({ idx, jobId, jobSeekerId, AcceptApply }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndAccpetHandler = () => {
    setIsOpen(!isOpen);
    AcceptApply(idx, jobId, jobSeekerId);
  };

  return (
    <>
      <button id="left" className="bubbly-button" onClick={openModalHandler}>
        {isOpen === false ? "지원승인" : "지원승인중"}
      </button>
      {isOpen === true ? (
        <ModalBackdrop>
          <span>지원을 승인하시겠습니까?</span>
          <button id="left" className="bubbly-button" onClick={CloseModalHandler}>아니요</button>
          <button className="bubbly-button" onClick={CloseAndAccpetHandler}>지원 승인하기</button>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default AccpetApplyModal;
