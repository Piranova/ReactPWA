import React from 'react';

import tw from "twin.macro";
import { ReactComponent as ChevronUpIcon } from "feather-icons/dist/icons/chevron-up.svg";
import * as Scroll from 'react-scroll';

const Container = tw.button`fixed h-12 w-12 bg-white bottom-0 right-0 mb-8 mr-8 rounded-md border-gray-400 border-2 flex items-center justify-center`;
const scroll = Scroll.animateScroll;

export default () => {
  return (
    <Container onClick={() => { scroll.scrollToTop(); }}>
      <ChevronUpIcon />
    </Container>
  );
}