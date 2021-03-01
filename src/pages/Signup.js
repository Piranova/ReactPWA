import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import StepImage from "images/step-image.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import Header from "components/headers/light.js";
import "react-phone-number-input/style.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;
const PhoneInputCSS =
  css
    `w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled(NavLink)`
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
const submitButtonText = "Sign Up";
const SubmitButtonIcon = SignUpIcon;
const tosUrl = "#";
const privacyPolicyUrl = "#";
const signInUrl = "/login";
const toVerifyPhoneUrl = "/verify-phone"
const logoLinkUrl = "#";
const illustrationImageSrc = illustration;
const headingText = "Sign Up For APP NAME";
//const history = useHistory();

class SignUpForm extends React.Component {
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
    console.log("submit clicked : ", event);
    //event.preventDefault();
    //this.props.history.push(event);
  }

  nextPath(path) {
    console.log("into next path");
    this.props.history.push(path);
  }

  handlePhoneNumberChange(event) {
    console.log("Phone number changed to : " + event);
  }

  render() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        {/* <Container> */}
        <Content>
          <MainContainer>
            {/* <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink> */}
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                {/* <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton key={index} href={socialButton.url}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>Or Sign up with your e-mail</DividerText>
                </DividerTextContainer> */}
                <Form>
                  <label>
                    <Select
                      value={this.state.accountTypeValue}
                      onChange={this.handleAccountTypeChange}
                    >
                      <option value="select">
                        Please select your account type
                      </option>
                      <option value="host">Host</option>
                      <option value="guest">Guest</option>
                    </Select>
                  </label>
                  <Input type="email" placeholder="Email" />
                  {/* <Input type="password" placeholder="Password" /> */}

                  {/* <PhoneInput
                  addInternationalOption = "true"
                  defaultCountry = "US"
                    placeholder="Enter phone number"
                    value={this.state.phoneNumberValue}
                    onChange={this.handlePhoneNumberChange}
                  /> */}
                  <SubmitButton type="submit" href="/verify-phone">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{submitButtonText}</span>
                  </SubmitButton>
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
                      Sign In
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
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={StepImage}
              //src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={StepImage}
              //src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
              />
            )}
          </Step>
        </ProgressBar>
      </AnimationRevealPage>
    );
  }
}
//export default withRouter(SignUpForm);
export default SignUpForm;
// export default ({

//   logoLinkUrl = "#",
//   illustrationImageSrc = illustration,
//   headingText = "Sign Up For APP NAME",
//   socialButtons = [
//     {
//       iconImageSrc: googleIconImageSrc,
//       text: "Sign Up With Google",
//       url: "https://google.com"
//     },
//     {
//       iconImageSrc: twitterIconImageSrc,
//       text: "Sign Up With Twitter",
//       url: "https://twitter.com"
//     }
//   ],
//   submitButtonText = "Sign Up",
//   SubmitButtonIcon = SignUpIcon,
//   tosUrl = "#",
//   privacyPolicyUrl = "#",
//   signInUrl = "/login"
// }) => (
//   <AnimationRevealPage disabled>
//     <Header/>
//     {/* <Container> */}
//       <Content>
//          <MainContainer>
//          {/* <LogoLink href={logoLinkUrl}>
//             <LogoImage src={logo} />
//           </LogoLink> */}
//           <MainContent>
//             <Heading>{headingText}</Heading>
//             <FormContainer>
//               {/* <SocialButtonsContainer>
//                 {socialButtons.map((socialButton, index) => (
//                   <SocialButton key={index} href={socialButton.url}>
//                     <span className="iconContainer">
//                       <img src={socialButton.iconImageSrc} className="icon" alt="" />
//                     </span>
//                     <span className="text">{socialButton.text}</span>
//                   </SocialButton>
//                 ))}
//               </SocialButtonsContainer>
//               <DividerTextContainer>
//                 <DividerText>Or Sign up with your e-mail</DividerText>
//               </DividerTextContainer> */}
//               <Form>
//               <label>
//           Pick your account type
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="host">HOST</option>
//             <option value="guest">GUESTS</option>
//           </select>
//         </label>
//                 <Input type="email" placeholder="Email" />
//                 <Input type="password" placeholder="Password" />
//                 <SubmitButton type="submit">
//                   <SubmitButtonIcon className="icon" />
//                   <span className="text">{submitButtonText}</span>
//                 </SubmitButton>
//                 <p tw="mt-6 text-xs text-gray-600 text-center">
//                   I agree to abide by treact's{" "}
//                   <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
//                     Terms of Service
//                   </a>{" "}
//                   and its{" "}
//                   <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
//                     Privacy Policy
//                   </a>
//                 </p>

//                 <p tw="mt-8 text-sm text-gray-600 text-center">
//                   Already have an account?{" "}
//                   <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
//                     Sign In
//                   </a>
//                 </p>
//               </Form>
//             </FormContainer>
//           </MainContent>
//         </MainContainer>
//         <IllustrationContainer>
//           <IllustrationImage imageSrc={illustrationImageSrc} />
//         </IllustrationContainer>
//       </Content>
//     {/* </Container> */}
//   </AnimationRevealPage>
// );
