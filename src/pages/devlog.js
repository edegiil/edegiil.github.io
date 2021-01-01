import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.section`
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

const Title = styled.h2`
  font-weight: 100;
  margin: 0;
`;

const Filter = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  justify-items: end;
  column-gap: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const FilterElement = styled.div``;

const Main = styled.main`
  display: grid;
  flex-direction: column;
  width: 900px;
  row-gap: 16px;
  margin-top: 16px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Thumbnail = styled.img`
  width: 360px;
  height: 210px;
  background-color: ${(props) => props.theme.DARK_COLOR};
`;

const PostInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
`;

const PostTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
`;

const PostCategory = styled.h4`
  margin: 0;
`;

const PostSubtitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;
`;

const PostSummary = styled.p`
  margin: 0;
  margin-bottom: 8px;
`;

const PostDateCreated = styled.p`
  margin: 0;
`;

function Devlog(props) {
  const {list} = props;
  return (
    <Background>
      <ContentSection>
        <TitleGroup>
          <Title>DEV.Log</Title>
        </TitleGroup>
        <Filter>
          <FilterElement>에세이(2)</FilterElement>
          <FilterElement>자바스크립트(1)</FilterElement>
          <FilterElement>React(1)</FilterElement>
        </Filter>
        <Main>
          {
            list.map((v, i) => {
              const {category, title, subtitle, summary, date_created, thumbnail} = v;
              return (
                <Link to='/'>
                  <Post>
                    <Thumbnail src={thumbnail || undefined} />
                    <PostInfoSection>
                      <PostCategory>{`#${category}`}</PostCategory>
                      <PostTitle>{title}</PostTitle>
                      <PostSubtitle>{subtitle}</PostSubtitle>
                      <PostSummary>{summary}</PostSummary>
                      <PostDateCreated>{date_created}</PostDateCreated>
                    </PostInfoSection>
                  </Post>
                </Link>
              );
            })
          }
        </Main>
      </ContentSection>
    </Background>
  );
}

Devlog.defaultProps = {
  list: [
    {
      category: '에세이',
      title: '내가 무엇을 아는가? 내가 무엇을 모르는가?',
      subtitle: '개발 메타인지',
      summary: 'Dan Abramov의 어쩌고 저쩌고',
      date_created: '2020.3.8',
      thumbnail: '',
    },
    {
      category: '에세이',
      title: '내가 무엇을 아는가? 내가 무엇을 모르는가?',
      subtitle: '개발 메타인지',
      summary: 'Dan Abramov의 어쩌고 저쩌고',
      date_created: '2020.3.8',
      thumbnail: '',
    },
  ],
};

export default Devlog;
