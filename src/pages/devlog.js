import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link, graphql} from 'gatsby';

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

const PostDateCreated = styled.p`
  margin: 0;
`;

function Devlog({data}) {
  const {distinct, group} = data.allMarkdownRemark;

  const [category, setCategory] = useState(group[0].fieldValue);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(group.filter((v) => v.fieldValue === category)[0].edges);
  }, [category, group]);

  const handleCategory = (v) => () => setCategory(v);
  return (
    <Background>
      <ContentSection>
        <TitleGroup>
          <Title>DEV.Log</Title>
        </TitleGroup>
        <Filter>
          {
            distinct.map((key, i) => {
              return (
                <FilterElement
                  key={String(key)}
                  onClick={handleCategory(key)}
                >
                  {`${key}(${group[i].totalCount})`}
                </FilterElement>
              );
            })
          }
        </Filter>
        <Main>
          {
            list && list.map((v, i) => {
              const {category, title, summary, date_created, thumbnail, path} = v.node.frontmatter;
              return (
                <Link to={`/${path}`}>
                  <Post>
                    <Thumbnail src={thumbnail || undefined} />
                    <PostInfoSection>
                      <PostCategory>{`#${category}`}</PostCategory>
                      <PostTitle>{title}</PostTitle>
                      <PostSubtitle>{summary}</PostSubtitle>
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

export const query = graphql`
  {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date_created}) {
      distinct(field: frontmatter___category)
      group(field: frontmatter___category) {
        edges {
          node {
            frontmatter {
              path
              category
              date_created
              title
              summary
              thumbnail
            }
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`;

export default Devlog;
