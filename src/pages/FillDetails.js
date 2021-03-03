import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import StepImage from "images/step-image.svg";
import Header from "components/headers/light.js";
import "react-phone-number-input/style.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import JotformEmbed from 'react-jotform-embed';

const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const illustrationImageSrc = illustration;
const headingText = "Enter Details";
class FillDetails extends React.Component {
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
    console.log("Phone number changed to : " + event);
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
                <JotformEmbed src="https://form.jotform.com/210556180185251" />
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

export default FillDetails;