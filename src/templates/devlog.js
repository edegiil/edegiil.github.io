import React from 'react';
import styled from 'styled-components';
import {graphql, navigate} from 'gatsby';

import Layout from 'components/layout';
import Footer from 'components/footer';
import SEO from 'components/seo';
import MDXContent from 'components/mdxContent';

import back_icon from 'assets/icons/back.svg';

const Main = styled.main`
  display: grid;
  row-gap: 36px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 800px;
  padding: 128px 0 50px;
  flex-direction: column;
  align-items: center;
  align-content: start;
  @media ${(props) => props.theme.tablet} {
    width: 80%;
    row-gap: 24px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    row-gap: 16px;
    padding-bottom: 60px;
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

const NavText = styled.div``;

const NavIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const TitleGroup = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  height: 250px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }

  &::after {
    content: '';
    background-color: ${(props) => props.theme.DARK_COLOR};
    background-image: url(${(props) => props.backgroundimage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.5);
    overflow: hidden;
    width: 100vw;
    height: 250px;
    z-index: -1;
    left: 0;
    position: absolute;
  }
`;

const Upside = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 8px;
`;

const TitleText = styled.h2`
  margin: 0;
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.BIG_SIZE}
  }
`;

const Downside = styled.div`
`;

const Subtitle = styled.div`
  margin: 0;
  font-weight: 100;
  font-size: ${(props) => props.theme.BIG_SIZE};
  @media ${(props) => props.theme.tablet} {
    font-size: ${(props) => props.theme.NORMAL_SIZE}
  }
`;

const InfoText = styled.div`
  margin: 0;
  line-height: 1.25rem;
`;

function DevlogTemplate({data}) {
  const {body, frontmatter} = data.mdx;
  const {title, summary, date_created, category, thumbnail} = frontmatter;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout withHeader>
      <SEO
        title={`${title} | edegiil.github.io`}
        description={summary}
        image={thumbnail}
      />
      <Main>
        <NavGroup onClick={goBack}>
          <NavIcon src={back_icon} alt='goback' />
          <NavText>돌아가기</NavText>
        </NavGroup>
        <TitleGroup backgroundimage={thumbnail}>
          <Upside>
            <Title>
              <TitleText>
                {title}
              </TitleText>
            </Title>
            <Subtitle>{summary}</Subtitle>
          </Upside>
          <Downside>
            <InfoText>{date_created}</InfoText>
            <InfoText>{category}</InfoText>
          </Downside>
        </TitleGroup>
        <MDXContent>{body}</MDXContent>
      </Main>
      <Footer />
    </Layout>
  );
}


export const query = graphql`
  query($directory: String!) {
    mdx(frontmatter: {path: {eq: $directory}}) {
      body
      frontmatter {
        path
        thumbnail
        category
        title
        summary
        date_created
        date_updated
      }
    }
  }
`;

export default DevlogTemplate;
