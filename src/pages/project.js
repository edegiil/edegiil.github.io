import React from 'react';
import styled from 'styled-components';

import ProjectElement from 'components/projectElement';

import contents from '../../data/contents';

const Background = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 81px 0;
  flex-direction: column;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

const Title = styled.h2`
  font-weight: 100;
  margin-top: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

function Proejct() {
  return (
    <Background>
      <TitleGroup>
        <Title>프로젝트</Title>
      </TitleGroup>
      <Main>
        {
          contents.project.map((project) => {
            return <ProjectElement {...project} />;
          })
        }
      </Main>
    </Background>
  );
}

export default Proejct;
