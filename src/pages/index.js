import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {graphql, Link} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import BackgroundLayout from 'components/backgroundLayout';

import 'configs/typography.css';

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

const TitleDecorator = styled.div`
  width: 50px;
  height: 0.5px;
  background-color: ${props => props.theme.MAIN_COLOR};
`;

const Title = styled.h3`
  font-weight: 100;
  margin: 0;
  width: 85px;
  text-align: center;
  font-family: ${(props) => {
    const {isSindarin} = props;
    return isSindarin ? `'Sindarin', sans-serif` : undefined;
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

const NavButton = styled(Link)`
  font-size: ${props => props.theme.NORMAL_SIZE};
`;

function Home({data}) {
  const [title_hover_state, setTitleHoverState] = useState(false);

  const handleTitleHover = useCallback(() => {
    setTitleHoverState((s) => !s);
  }, []);

  return (
    <Layout>
      <Main>
        <TitleGroup>
          <TitleWrapper>
            <TitleDecorator />
            <Title
              onMouseEnter={handleTitleHover}
              onMouseOut={handleTitleHover}
              isSindarin={!title_hover_state}
            >
              {title_hover_state ? 'EDEGIL' : '3G2E7G5'}
            </Title>
            <TitleDecorator />
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
