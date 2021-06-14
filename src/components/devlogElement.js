import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 260px;
  height: 260px;
  padding: 24px;
  box-sizing: border-box;
  background-color: ${props => props.theme.DARK_COLOR};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 260px;
    height: 260px;
    border-radius: 20px;
    background-image: url(${props => props.backgroundimage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.5) blur(4px);
  }
`;

const Title = styled.h3`
  margin: 0;
  color: ${props => props.theme.BRIGHT_COLOR};
  z-index: 1;
`;

const Summary = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1.25rem;
  color: ${props => props.theme.BRIGHT_COLOR};
  z-index: 1;
`;

const Time = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1rem;
  position: absolute;
  z-index: 1;
  top: 24px;
  left: 24px;
  color: ${props => props.theme.BRIGHT_COLOR};
`;

const Category = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1rem;
  position: absolute;
  z-index: 1;
  bottom: 24px;
  left: 24px;
  color: ${props => props.theme.BRIGHT_COLOR};
`;

function DevlogElement(props) {
  const {category, title, summary, date_created, thumbnail, path} = props;

  return (
    <Container to={path} backgroundimage={thumbnail}>
      <Time>{date_created}</Time>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <Category>{`#${category}`}</Category>
    </Container>
  );
}

export default DevlogElement;
