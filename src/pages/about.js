import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import AboutElement from 'components/aboutElement';
import AboutModal from 'components/aboutModal';

import contents from '../../data/contents';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
`;

const Title = styled.h2`
  font-weight: 100;
  margin-top: 0;
`;

const SubTitle = styled.div`
  font-weight: 100;
`;

const Contents = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 24px 7%;
`;

const ContentBox = styled.div`
  display: grid;
  row-gap: 16px;
  align-content: start;
  width: 20%;
  min-width: 230px;
  margin-bottom: 32px;
`;

const ContentBoxTitle = styled.h3`
  font-weight: normal;
  margin: 0;
`;

function Home(props) {
  const [modal_status, setModalStatus] = useState(false);

  const handleModal = useCallback(() => {
    setModalStatus((state) => !state);
  }, []);

  return (
    <Background>
      {
        modal_status && <AboutModal closeModal={handleModal} />
      }
      <TitleGroup>
        <Title>소개</Title>
        <SubTitle>1996년 생. 대구광역시 출생. 스타트업 개발자</SubTitle>
      </TitleGroup>
      <Contents>
        <ContentBox>
          <ContentBoxTitle>교육</ContentBoxTitle>
          {
            contents.about.educations.map((data, i) => {
              return (
                <AboutElement data={data} openModal={handleModal} />
              );
            })
          }
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>활동</ContentBoxTitle>
          {
            contents.about.careers.map((data, i) => {
              return (
                <AboutElement data={data} />
              );
            })
          }
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>관심분야</ContentBoxTitle>
          {
            contents.about.interests.map((data, i) => {
              return (
                <AboutElement data={data} />
              );
            })
          }
        </ContentBox>
        <ContentBox>
          <ContentBoxTitle>기술스택</ContentBoxTitle>
          {
            contents.about.tech_stacks.map((data, i) => {
              return (
                <AboutElement data={data} />
              );
            })
          }
        </ContentBox>
      </Contents>
    </Background>
  );
}

export default Home;
