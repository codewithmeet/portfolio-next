import React, { useState } from "react";
import Row from "../Row";

import Box from "../Box";
import {
  FooterContainer,
  FooterForm,
  FooterFormEleWrap,
  FooterFormInput,
  FooterFormInputLabel,
  FooterFormSubmit,
  FooterFormTextArea,
  FooterRightsContainer,
  FooterRightsPara,
} from "./Footer.style";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactFormSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    queries: yup.string().min(2).max(255).required(),
  })
  .required();

/* Todo */
/**
 * Contact
 * Social
 */

const Footer = (props) => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      alert(
        `We have received your message and will reply to you within 15 minutes. Thank you.`
      );
      reset();
    });
  };
  return (
    <Row>
      <Box {...props}>
        <Heading
          title="3. Hire Me"
          subtitle="Let's turn an idea into reality"
        />
        <FooterContainer>
          <FooterForm onSubmit={handleSubmit(onSubmit)}>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>First Name*</FooterFormInputLabel>
                <FooterFormInput
                  placeholder="Your first name, please?"
                  {...register("firstName")}
                  disabled={isSendingEmail}
                />
                {errors.firstName && <p>First name is required.</p>}
              </FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Last Name*</FooterFormInputLabel>
                <FooterFormInput
                  placeholder="Your last name, please?"
                  {...register("lastName")}
                  disabled={isSendingEmail}
                />
                {errors.lastName && <p>Last name is required.</p>}
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Email*</FooterFormInputLabel>
                <FooterFormInput
                  autoComplete="off"
                  placeholder="johndoe@gmail.com"
                  {...register("email")}
                  disabled={isSendingEmail}
                />
                {errors.email && <p>Email is required.</p>}
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormEleWrap>
              <FooterFormEleWrap column>
                <FooterFormInputLabel>Queries*</FooterFormInputLabel>
                <FooterFormTextArea
                  rows="6"
                  autoComplete="off"
                  placeholder="Hmm, it looks like you haven't written your queries yet."
                  {...register("queries")}
                  disabled={isSendingEmail}
                />
                {errors.queries && (
                  <p>
                    Hmm, it looks like you haven't written your question yet
                  </p>
                )}
              </FooterFormEleWrap>
            </FooterFormEleWrap>
            <FooterFormSubmit type="submit" disabled={isSendingEmail}>
              Let's Talk
            </FooterFormSubmit>
          </FooterForm>
        </FooterContainer>

        <FooterRightsContainer>
          <FooterRightsPara size="14px">
            Copyright &copy; Meet Mandaviya 2020-{new Date().getFullYear()}.
          </FooterRightsPara>
          <FooterRightsPara size="12px">
            The photographs on this website are the copyright of their
            respective owners.
          </FooterRightsPara>
        </FooterRightsContainer>
      </Box>
    </Row>
  );
};

export default Footer;
