import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import Header from "components/headers/light.js";
import { Container as ContainerBase, } from "components/misc/Layouts";

const Container = tw(ContainerBase)``;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 sm:rounded-lg flex justify-center flex-1`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
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
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const Link = tw.p`mt-6 text-xs text-gray-600 text-center`

export default ({
  illustrationImageSrc = illustration,
  headingText = "Sign In To APP NAME",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "/signup",
}) => (
  <AnimationRevealPage disabled>
    <Header />
    <Container>
      <Content>
        <MainContent>
          <Heading>{headingText}</Heading>
          <FormContainer>
            <Form>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <SubmitButton type="submit" >
                <SubmitButtonIcon className="icon" />
                <span className="text">{submitButtonText}</span>
              </SubmitButton>
            </Form>
            <Link>
              <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                Forgot Password ?
              </a>
            </Link>
            <Link>
              Dont have an account?{" "}
              <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                Sign Up
              </a>
            </Link>
          </FormContainer>
        </MainContent>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
