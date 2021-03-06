import React, { useState, useRef } from "react";
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
import logoImageSrc from "images/chef-icon.svg";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Link } from 'react-scroll'
import { useHistory } from 'react-router-dom';
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import USFLAG from "../../images/us.svg";
import INFLAG from "../../images/in.png";

const gradientCss =
  css`
    background: linear-gradient(to bottom, rgba(101, 219, 168, 1), rgba(0, 148, 68, 1), rgba(0, 148, 68, 0));
  `;
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(Link)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 hover:border-primary-500 hocus:text-primary-500`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(PrimaryLinkBase)`shadow-raised lg:bg-custom-light lg:hover:bg-custom-dark`;
const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const TextColumn = tw.div`text-center w-full mb-4 lg:text-left lg:w-1/2`;
const Heading = tw(SectionHeading)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const VideoColumn = tw.div`text-center w-full mb-4 lg:text-left md:w-1/2`;

const MenuContainer = tw.div`relative inline-block mx-6 my-2 lg:my-0 pb-1`;
const MenuTrigger = tw.button`focus:outline-none`;
const MenuTriggerSpan = tw.span`focus:outline-none font-semibold text-lg lg:text-sm`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium text-black focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-custom-light text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-custom-dark transition duration-300`}
  }
`;
export default ({
  heading = "High Performant Servers tailored to your needs",
  description = "Our cloud provisions the best servers, with fast SSD, powerful Xeon Processors, whenever you need it. Oh, and we have 99.9% SLA",
}) => {
  const history = useHistory();

  const [emailValue, setEmailValue] = useState('');
  const [country, setCountry] = useState('United States');
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      APP NAME
    </LogoLink>
  );
  const navLinks = [
    <NavLinks key={1}>
      <MenuContainer>
        <MenuTrigger onClick={onClick}>
          <MenuTriggerSpan>{country}</MenuTriggerSpan>
        </MenuTrigger>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a onClick={() => { setCountry('United States') }}>
                <img style={{ width: '20px', display: 'inline-block', marginRight: '10px' }} src={USFLAG} />United States</a>
            </li>
            <li>
              <a onClick={() => { setCountry('India') }}>
                <img style={{ width: '20px', display: 'inline-block', marginRight: '10px' }} src={INFLAG} />India</a>
            </li>
          </ul>
        </nav>
      </MenuContainer>
      <NavLink
        to="features"
        smooth={true}
        duration={500}
      >Features
        </NavLink>
      <NavLink
        to="pricing"
        smooth={true}
        duration={500}
      >
        Pricing
        </NavLink>
      <NavLink
        to="contact-us"
        smooth={true}
        duration={500}>
        Contact Us
      </NavLink>
      <NavLinkBase href="/login">Login</NavLinkBase>
      <PrimaryLink href="/signup">Signup</PrimaryLink>
    </NavLinks>
  ];

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
                  <input placeholder="Your E-mail Address" onChange={(ev) => { setEmailValue(ev.target.value) }} value={emailValue} />
                  <button type="submit" onClick={() => { history.push({ pathname: '/signup', state: { email: emailValue } }) }}>Get Started</button>
                </Actions>
              </TextColumn>
              <VideoColumn>
                <ReactPlayer controls width="auto"
                  url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                />
              </VideoColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </PrimaryBackgroundContainer>
  );
};
