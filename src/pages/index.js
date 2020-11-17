import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from 'components/layout';

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
  font-size: ${(props) => props.theme.GIANT_SIZE};
  color: ${(props) => props.theme.MAIN_COLOR};
  margin: 0;
`;

const SubTitle = styled.div`
`;

function Home(props) {
  const {data} = props;
  const background_image = data.file.childImageSharp.fluid;

  return (
    <Layout props={props}>
      <BackgroundImage fluid={background_image}>
        <Background>
          <TitleGroup>
            <Title>WINGTREE</Title>
            <SubTitle>개발자의 공간</SubTitle>
          </TitleGroup>
        </Background>
      </BackgroundImage>
    </Layout>
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
