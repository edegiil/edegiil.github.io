import React, {useEffect} from 'react';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';

import back_icon from 'assets/icons/back.svg';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const NavText = styled.div``;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Category = styled.div`
  margin: 0;
  font-weight: 100;
`;

const Subtitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
`;

const DateCreated = styled.div`
  font-weight: bold;
`;

const Content = styled.main`
  width: 900px;
`;

function DevlogTemplate({data}) {
  const {html, frontmatter} = data.markdownRemark;
  const {category, title, summary, date_created, date_updated} = frontmatter;

  useEffect(() => {
    document.getElementById('content').innerHTML = html;
  });

  return (
    <Background>
      <ContentBox>
        <Link to='/devlog' replace>
          <NavGroup>
            <Icon src={back_icon} />
            <NavText>돌아가기</NavText>
          </NavGroup>
        </Link>
        <TitleGroup>
          <Title>{title}</Title>
          <Category>{category}</Category>
        </TitleGroup>
        <Subtitle>{summary}</Subtitle>
        <DateCreated>{`작성일자 : ${date_created}`}</DateCreated>
        {
          date_updated && (
            <DateCreated>{`최종수정 : ${date_updated}`}</DateCreated>
          )
        }
        <Content id='content' />
      </ContentBox>
    </Background>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
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
