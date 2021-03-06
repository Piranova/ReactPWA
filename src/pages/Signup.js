import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import StepImage from "images/step-image.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import Header from "components/headers/light.js";
import "react-phone-number-input/style.css";
import "react-step-progress-bar/styles.css";

import { ProgressBar, Step } from "react-step-progress-bar";
import PhoneInput from 'react-phone-number-input'
import { useHistory, useLocation } from "react-router-dom";

const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const PhoneDiv = styled.div`
  ${tw`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm mt-5`}
  input {
    ${tw`focus:outline-none`}
  }`;

const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const Link = tw.p`mt-6 text-xs text-gray-600 text-center`;
const submitButtonText = "Sign Up";
const SubmitButtonIcon = SignUpIcon;
const tosUrl = "#";
const privacyPolicyUrl = "#";
const signInUrl = "/login";
const illustrationImageSrc = illustration;
const headingText = "Sign Up For APP NAME";

const SignUpForm = () => {

  const history = useHistory();
  const location = useLocation();

  const [accountTypeValue, setAccountTypeValue] = useState('Please select your account type');
  const [emailValue, setEmailValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('Enter phone number');

  useEffect(() => {
    if (location.state && location.state.email) setEmailValue(location.state.email);
  }, [])

  const handleAccountTypeChange = (event) => {
    setAccountTypeValue(event.target.value);
    console.log("Account type selected : ", event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("submit clicked : ", event);
    nextPath('/verify-phone')
  }

  const nextPath = (path) => {
    console.log("into next path");
    history.push(path);
  }

  const handlePhoneNumberChange = (value) => {
    setPhoneNumberValue(value);
    console.log("Phone number changed to : " + value);
  }

  return (
    <AnimationRevealPage disabled>
      <Header />
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form>
                <label>
                  <Select
                    value={accountTypeValue}
                    onChange={handleAccountTypeChange}
                  >
                    <option value="select">
                      Please select your account type
                      </option>
                    <option value="host">Host</option>
                    <option value="guest">Guest</option>
                  </Select>
                </label>
                <Input placeholder="Email" value={emailValue} onChange={(ev) => { setEmailValue(ev.target.value) }} />
                <PhoneDiv>
                  <PhoneInput
                    country="US"
                    value={phoneNumberValue}
                    onChange={handlePhoneNumberChange} />
                </PhoneDiv>
                <SubmitButton onClick={handleSubmit}>
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <Link tw="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by app's{" "}
                  <a
                    href={tosUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                    </a>{" "}
                    and its{" "}
                  <a
                    href={privacyPolicyUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                    </a>
                </Link>

                <Link tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a
                    href={signInUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Sign In
                    </a>
                </Link>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
      <ProgressBar
        percent={0}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {() => (
            <img
              style={{ filter: `grayscale(${80}%)` }}
              width="30"
              src={StepImage}
              alt=""
            />
          )}
        </Step>
        <Step transition="scale">
          {() => (
            <img
              style={{ filter: `grayscale(${80}%)` }}
              width="30"
              src={StepImage}
              alt="" />
          )}
        </Step>
        <Step transition="scale">
          {() => (
            <img
              style={{ filter: `grayscale(${0}%)` }}
              width="30"
              src={StepImage}
              alt=""
            />
          )}
        </Step>
      </ProgressBar>
    </AnimationRevealPage>
  );
}
export default SignUpForm;