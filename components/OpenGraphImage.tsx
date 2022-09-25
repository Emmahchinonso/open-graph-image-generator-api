import React from "react";
import styled from "styled-components";
import { COLORS } from "@/libs/constants";
import { injectGlobalStyles } from "@/styles/globals";

const OpenGraphImage = () => {
  return <Container>OpenGraphImage</Container>;
};

const Container = styled.section`
  width: calc(75rem / 2);
  height: calc(39.375rem / 2);
  background-image: ${COLORS.linearGradient};
  ${injectGlobalStyles}
`;

export default OpenGraphImage;
