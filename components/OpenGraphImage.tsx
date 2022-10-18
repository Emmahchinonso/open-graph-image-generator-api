import React from "react";
import styled from "styled-components";
import { COLORS } from "@/libs/constants";
import { injectGlobalStyles } from "@/styles/globals";
import { Textfit } from "react-textfit";
import { render } from "react-dom";

const OpenGraphImage = () => {
  return (
    <Container>
      <Content>
        <h1>
          <Textfit
            max={256}
            min={24}
            style={{ maxHeight: "80%", minHeight: "80%", lineHeight: "1" }}
          >
            Being a software enginner is not all it’s cut out to be.
          </Textfit>
        </h1>
        <ContentMeta>
          <Tags>
            <li>life</li>
            <li>career</li>
            <li>web_dev</li>
          </Tags>
          <p>@ChinonsoEmmanuel</p>
        </ContentMeta>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: calc(1200px);
  height: calc(630px);
  background-image: ${COLORS.linearGradient};
  padding: 40px;
  display: flex;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  ${injectGlobalStyles}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2rem;
  background: #160e04;
  color: #fcf4e9;
  border-radius: 15px;

  & > h1 {
    height: 100%;
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & li:not(:first-child)::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

render(<OpenGraphImage />, document?.getElementById("root"));

export default OpenGraphImage;
