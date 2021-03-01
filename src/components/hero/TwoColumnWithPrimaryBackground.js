import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase
} from "../headers/light.js";
import { Container as ContainerBase, ContentWithVerticalPadding, Content2Xl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/chef-icon.svg";
//import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import styled from "styled-components";
import ReactPlayer from "react-player";

import { Link } from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink
//import Login from "../../login.js"
const gradientCss =
  css`
    background: linear-gradient(to bottom, rgba(101, 219, 168, 1), rgba(0, 148, 68, 1), rgba(0, 148, 68, 0));
  `;
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`

export default ({
  heading = "High Performant Servers tailored to your needs",
  description = "Our cloud provisions the best servers, with fast SSD, powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA",
  primaryButtonText = "Start Your 15 Day Free Trial",
  primaryButtonUrl = "#",
  //imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      APP NAME
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        <Link
          to="features"
          smooth={true}
          duration={500}
        >
          United States
        </Link>
      </NavLink>
      <NavLink href="#">
        <Link
          to="features"
          smooth={true}
          duration={500}
        >Features
        </Link>
      </NavLink>
      <NavLink href="#">
        <Link
          to="pricing"
          smooth={true}
          duration={500}
        >
          Pricing
        </Link>
      </NavLink>
      <NavLink href="#">Contact Us</NavLink>
      <NavLink href="/login">Login</NavLink>
      <PrimaryLink href="#">Signup</PrimaryLink>
    </NavLinks>
  ];
  const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-300 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-600 transition duration-300`}
  }
`;
  return (
    <PrimaryBackgroundContainer css={gradientCss}>
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <br /><br />
                <Actions>
                  <input type="text" placeholder="Your E-mail Address" />
                  <button>Get Started</button>
                </Actions>
              </TextColumn>
              <ReactPlayer controls="true"
                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
              />
              {/* <IllustrationColumn>
              <ReactPlayer   controls="true" 
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
              </IllustrationColumn> */}
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
