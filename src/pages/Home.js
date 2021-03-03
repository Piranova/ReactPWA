import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import HowItWorks from "components/features/ThreeColWithSideImage.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import GotoTop from "components/footers/GotoTop";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      {scrollPosition > 200 && <GotoTop />}
    </AnimationRevealPage>
  );
};
export default Home;