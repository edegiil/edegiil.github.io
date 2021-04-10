import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.h4`
  font-weight: 100;
  margin: 0;
  margin-bottom: 20px;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>공허...</Subtitle>
      <Link to='/'>입구로 돌아가기</Link>
    </Container>
  );
};

export default NotFoundPage;
