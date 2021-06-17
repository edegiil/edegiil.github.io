import React, {useState, useCallback} from 'react';
import styled, {keyframes} from 'styled-components';
import {graphql, Link} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import SEO from 'components/seo';

import background_image from 'assets/images/background.png';
import ring_of_power_left from 'assets/images/the_ring_of_power_left.png';
import ring_of_power_right from 'assets/images/the_ring_of_power_right.png';

const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 16px;
`;

const TitleDecorator = styled.img`
  width: 50px;
`;

const Title = styled.h3`
  font-weight: 100;
  margin: 0;
  width: 85px;
  text-align: center;
  font-family: ${(props) => {
    const {isSindarin} = props;
    return isSindarin ? `'Sindarin', sans-serif` : `'Half-Elven', sans-serif`;
  }};
`;

const SubTitle = styled.div`
  font-size: ${props => props.theme.TINY_SIZE};
  text-align: center;
`;

const NavGroup = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: 32px;
`;

const shine = keyframes`
  from {
    background-position: top left;
  }

  to {
    background-position: top right;
  }
`

const NavButton = styled(Link)`
  font-size: ${props => props.theme.NORMAL_SIZE};
  font-family: 'Half-Elven', sans-serif;

  &:hover {
    animation: ${shine} 2s linear infinite;
    color: #ff9e00;
    background: linear-gradient(45deg, rgba(255,158,0,1) 25%, rgba(255,0,0,1) 54%, rgba(255,158,0,1) 75%);
    background-size: 400% 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 8px #ffc900;
  }
`;

function Home({data}) {
  const [title_hover_state, setTitleHoverState] = useState(false);

  const handleTitleHover = useCallback(() => {
    setTitleHoverState((s) => !s);
  }, []);

  return (
    <Layout backgroundimage={background_image}>
      <SEO
        title='edegiil.github.io'
        description='edegil 기술 블로그'
      />
      <Main>
        <TitleGroup>
          <TitleWrapper>
            <TitleDecorator src={ring_of_power_left} alt='ring_of_power_left' />
            <Title
              onMouseEnter={handleTitleHover}
              onMouseOut={handleTitleHover}
              isSindarin={!title_hover_state}
            >
              {title_hover_state ? 'EDEGIL' : '3G2E7G5'}
            </Title>
            <TitleDecorator src={ring_of_power_right} alt='ring_of_power_left' />
          </TitleWrapper>
          <SubTitle>seven stars</SubTitle>
        </TitleGroup>
        <NavGroup>
          <NavButton to='/about'>ABOUT</NavButton>
          <NavButton to='/project'>PROJECT</NavButton>
          <NavButton to='/devlog'>DEVLOG</NavButton>
          <NavButton to='/contact'>CONTACT</NavButton>
        </NavGroup>
      </Main>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: {eq: "background.png"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home;
