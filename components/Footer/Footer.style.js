import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FooterFormEleWrap = styled.div`
  display: flex;
  width: 100%;
  ${(props) => {
    if (props.column) {
      return css`
        flex-direction: column;
        gap: 15px;
      `;
    }
    return css`
      flex-direction: row;
      gap: 15px;
    `;
  }};
`;

const FooterFormInput = styled.input`
  width: 100%;
  padding: 20px 12px;
  height: 10px;
  color: var(--slate);
  font-size: var(--fz-xl);
  border-color: var(--brand-pink);
  background-color: var(--dark-navy);
`;

const FooterFormTextArea = styled.textarea`
  width: 100%;
  padding: 20px 12px;
  color: var(--slate);
  font-size: var(--fz-xl);
  border-color: var(--brand-pink);
  background-color: var(--dark-navy);
  resize: none;
`;

const FooterFormInputLabel = styled.label`
  color: var(--green-tint);
  margin-left: 2px;
`;

const FooterFormSubmit = styled.button`
  width: 10%;
  height: 5vh;
  font-weight: 600;
  font-size: var(--fz-xl);
  border: 2px solid var(--dark-navy);
  transition: var(--transition);
  color: var(--dark-navy);
  background-color: var(--brand-pink);
  :hover {
    color: var(--brand-pink);
    background-color: var(--dark-navy);
  }
`;

export {
  FooterContainer,
  FooterForm,
  FooterFormEleWrap,
  FooterFormInput,
  FooterFormTextArea,
  FooterFormInputLabel,
  FooterFormSubmit,
};
