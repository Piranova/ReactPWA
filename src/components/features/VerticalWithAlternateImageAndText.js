import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import FormFillUpImage from "images/fill_forms.svg";
import SecuredData from "images/secured_data.svg";
import CarryEverywhere from "images/carry_everywhere.svg";
const Container = tw.div`relative`;
import { css } from "styled-components/macro"; //eslint-disable-line
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-10`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/6 lg:w-5/12 xl:w-1/2 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-gray-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose text-gray-100`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 text-gray-100`;
export default () => {
  const cards = [
    {
      imageSrc: FormFillUpImage,
      subtitle: "Minutes to signup",
      title: "Create an account in mintues",
      description:
        "Fill up a super easy form and enjoy the freedom of carry your vaccination form in your pocket hassle-free."
    },

    {
      imageSrc: SecuredData,
      subtitle: "Dont have to worry about your data",
      title: "Data Security is our top priority.",
      description:
      "Your sensitive data will be secured as per the guidelines set by HIPAA."
    },

    {
      imageSrc:
      CarryEverywhere,
      subtitle: "Proof in your pocket",
      title: "Travel and Provide Proof of Documentation With Ease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
  
  const gradientCss = 
  css`
    background: linear-gradient(to bottom,rgba(101, 219, 168, 0), rgba(101, 219, 168, 1), rgba(0, 148, 68, 1), rgba(0, 148, 68, 0));
  `;
  return (
    <PrimaryBackgroundContainer css = {gradientCss}>
    <Container >
      <SingleColumn >
        <Content >
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1} >
              <Image imageSrc={card.imageSrc} />
              <Details >
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
    </PrimaryBackgroundContainer>
  );
};
