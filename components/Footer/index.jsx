import React from "react";
import Row from "../Row";
import Column from "../Column";

import Box from "../Box";
import {
  FooterContainer,
  FooterForm,
  FooterFormEleWrap,
  FooterFormInput,
  FooterFormInputLabel,
  FooterFormSubmit,
  FooterFormTextArea,
} from "./Footer.style";
import Heading from "../Heading";

/* Todo */
/**
 * Contact
 * Social
 */

const Footer = (props) => {
  return (
    <Row>
      <Box {...props}>
        <Heading
          title="2. Hire Me"
          subtitle="Let's turn an idea into reality"
        />
        <FooterContainer>
          <FooterForm>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>First Name</FooterFormInputLabel>
                <FooterFormInput placeholder="Meet" />
              </FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Last Name</FooterFormInputLabel>
                <FooterFormInput placeholder="Mandaviya" />
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Email</FooterFormInputLabel>
                <FooterFormInput autoComplete="off" placeholder="abc@abc.com" />
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Queries</FooterFormInputLabel>
                <FooterFormTextArea
                  rows="6"
                  autoComplete="off"
                  placeholder="Feel free to ask"
                />
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormSubmit>{`Let's Talk`}</FooterFormSubmit>
          </FooterForm>
        </FooterContainer>
      </Box>
    </Row>
  );
};

export default Footer;
