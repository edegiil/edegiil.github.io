import React from 'react';
import styled from 'styled-components';

import AboutElement from 'components/aboutElement';
import Layout from 'components/layout';
import Footer from 'components/footer';
import SEO from 'components/seo';

import contents from 'configs/aboutContent';

import github_icon from 'assets/icons/github.svg';

const Main = styled.main`
  display: grid;
  row-gap: 36px;
  box-sizing: border-box;
  min-height: 100vh;
  width: 800px;
  padding: 128px 0 50px;
  flex-direction: column;
  align-items: center;
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

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: 'Half-Elven', sans-serif;
  font-weight: bold;
  margin: 0;
`;

const SubTitle = styled.div`
  font-weight: 100;
`;

const Content = styled.div`
  display: grid;
  row-gap: 16px;
  align-content: start;
  width: 800px;
  min-width: 230px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const ContentTitle = styled.h3`
  font-weight: normal;
  margin: 0;
`;

const LinkAnchor = styled.a`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => props.backgroundimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 12px;
  @media ${(props) => props.theme.mobile} {
    width: 24px;
    height: 24px;
  }
`;

const List = styled.ul`

`;

const ListElement = styled.li`
  font-weight: ${(props) => props.highlight ? 'bold' : null};
`;

function Home(props) {
  const {educations, careers, interests, tech_stacks} = contents.about;

  return (
    <Layout withHeader>
      <SEO
        title='About | edegiil.github.io'
        description='About edegil'
      />
      <Main>
        <TitleGroup>
          <Title>ABOUT</Title>
          <SubTitle>1996년 생. 대구광역시 출생. 프론트엔드 개발자</SubTitle>
        </TitleGroup>
        <Content>
          <LinkAnchor
            target='_blank'
            href='https://github.com/edegiil'
            backgroundimage={github_icon}
          />
        </Content>
        <Content>
          <List>
            <ListElement>1일 1커밋 운동과 기술 블로그 운영을 하려고 노력 중</ListElement>
            <ListElement>다른 사람들이 이해하기 쉬운 코드는 어떻게 쓸 수 있는가 고민 중</ListElement>
            <ListElement>지식을 나누기 위해 개발 동아리를 운영 중</ListElement>
            <ListElement highlight>비영리 코딩 교육 단체를 만들고 오픈소스 라이브러리도 개발할 예정</ListElement>
          </List>
        </Content>
        <Content>
          <ContentTitle>교육</ContentTitle>
          {
            educations.map((data, i) => {
              return (
                <AboutElement
                  key={String(i)}
                  data={data}
                />
              );
            })
          }
        </Content>
        <Content>
          <ContentTitle>활동</ContentTitle>
          {
            careers.map((data, i) => {
              return (
                <AboutElement
                  key={String(i)}
                  data={data}
                />
              );
            })
          }
        </Content>
        <Content>
          <ContentTitle>관심분야</ContentTitle>
          {
            interests.map((data, i) => {
              return (
                <AboutElement
                  key={String(i)}
                  data={data}
                />
              );
            })
          }
        </Content>
        <Content>
          <ContentTitle>기술스택</ContentTitle>
          {
            tech_stacks.map((data, i) => {
              return (
                <AboutElement
                  key={String(i)}
                  data={data}
                />
              );
            })
          }
        </Content>
      </Main>
      <Footer />
    </Layout>
  );
}

export default Home;
