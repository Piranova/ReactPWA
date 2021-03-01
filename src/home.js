import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import HowItWorks from "components/features/ThreeColWithSideImage.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import { Element } from "react-scroll";
const Home = () => {
  return (
    <AnimationRevealPage disabled>
      <Hero />
      <HowItWorks />
      <Element name="features">
        <Features />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Pricing />
      <FAQ />
      <Footer />
    </AnimationRevealPage>)
};
export default Home;