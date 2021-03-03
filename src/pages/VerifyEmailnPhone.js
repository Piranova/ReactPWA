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

const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const VerifyButton = styled(NavLink)`
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
const VerifyButtonText = "Verify";
const ResendButtonText = "Resend";
const VerifyButtonIcon = VerifyImage;
const ResendButtonIcon = ResendImage;
const tosUrl = "#";
const privacyPolicyUrl = "#";
const signInUrl = "/login";
const illustrationImageSrc = illustration;
const headingText = "Verify Phone number";


class VerifyPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accountTypeValue: "Please select your account type", phoneNumberValue: "Enter phone number" };

    this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAccountTypeChange(event) {
    this.setState({ accountTypeValue: event.target.value });
    console.log("Account type selected : ", event.target.value);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.accountTypeValue);
    event.preventDefault();
  }

  handlePhoneNumberChange(event) {
    console.log("Phone number changed to : "+event);
  }
  render() {
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
                  <VerifyButton type="submit" href="/fill-details">
                    <VerifyButtonIcon className="icon" />
                    <span className="text">{VerifyButtonText}</span>
                  </VerifyButton>
                  <VerifyButton type="submit">
                    <ResendButtonIcon className="icon" />
                    <span className="text">{ResendButtonText}</span>
                  </VerifyButton>
                  
                  <p tw="mt-6 text-xs text-gray-600 text-center">
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
                  </p>

                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a
                      href={signInUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Log In
                    </a>
                  </p>
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
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={StepImage}
              alt=""
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src={StepImage}
              alt=""
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
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
}

export default VerifyPhone;