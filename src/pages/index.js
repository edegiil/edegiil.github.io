import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import CopyRightStatement from 'components/copyRightStatement';

import 'configs/typography.css';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
`;

const Title = styled.h1`
  font-weight: 100;
  margin: 0;
  font-family: 'Sindarin', sans-serif;
`;

const SubTitle = styled.div`
`;

function Home(props) {
  const {data} = props;
  const background_image = data.file.childImageSharp.fluid;

  return (
    <BackgroundImage fluid={background_image}>
      <Background>
        <TitleGroup>
          <Title>3G2E7G5</Title>
          <SubTitle>seven stars</SubTitle>
        </TitleGroup>
      </Background>
      <CopyRightStatement />
    </BackgroundImage>
  );
}

export const query = graphql`
  query {
    file(relativePath: {eq: "background.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }    
    }
  }
`;

export default Home;
