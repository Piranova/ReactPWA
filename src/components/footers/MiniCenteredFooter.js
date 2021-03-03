import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logoImageSrc from "images/chef-icon.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 text-gray-100`;
const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  const gradientCss =
    css`
    background: linear-gradient(to bottom, rgba(0, 148, 68, 1), rgba(101, 219, 168, 1), rgba(101, 219, 168, 0));
  `;
  return (
    <PrimaryBackgroundContainer css={gradientCss}>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logoImageSrc} />
            <LogoText>APP NAME</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">United States</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Login</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, Parent company Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
      {/* </Container> */}
    </PrimaryBackgroundContainer>
  );
};
