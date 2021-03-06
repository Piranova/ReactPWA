import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import StepImage from "images/step-image.svg";
import { ReactComponent as ResendImage } from "images/resend.svg";
import { ReactComponent as VerifyImage } from "images/verify.svg";
import Header from "components/headers/light.js";
import "react-phone-number-input/style.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useHistory } from "react-router-dom";

const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

const VerifyButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-custom-light text-gray-100 w-full py-4 rounded-lg hover:bg-custom-dark transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
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

const VerifyButtonText = "Verify";
const ResendButtonText = "Resend";
const VerifyButtonIcon = VerifyImage;
const ResendButtonIcon = ResendImage;
const tosUrl = "#";
const privacyPolicyUrl = "#";
const signInUrl = "/login";
const illustrationImageSrc = illustration;
const headingText = "Verify Phone number";


const VerifyPhone = () => {

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/fill-details')
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
                <Input type="text" placeholder="Enter otp" />
                <VerifyButton onClick={handleSubmit}>
                  <VerifyButtonIcon className="icon" />
                  <span className="text">{VerifyButtonText}</span>
                </VerifyButton>
                <VerifyButton>
                  <ResendButtonIcon className="icon" />
                  <span className="text">{ResendButtonText}</span>
                </VerifyButton>
                <Link>
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

                <Link>
                  Already have an account?{" "}
                  <a
                    href={signInUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Log In
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
      {/* </Container> */}
      <ProgressBar
        percent={0}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
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
              alt=""
            />
          )}
        </Step>
      </ProgressBar>
    </AnimationRevealPage>
  );

}

export default VerifyPhone;