import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 260px;
  height: 260px;
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

const Status = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1.25rem;
  color: ${props => props.isClosed ? '#D00000' : '#0AB107'};
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
  bottom: 16px;
  color: ${props => props.theme.BRIGHT_COLOR};
`;

function ProjectElement(props) {
  const {title, status, summary, time, thumbnail, path} = props;

  const is_closed = status === 'CLOSED';

  return (
    <Container to={path} backgroundimage={thumbnail}>
      <Title>{title}</Title>
      <Status isClosed={is_closed}>{status}</Status>
      <Summary>{summary}</Summary>
      <Time>{time}</Time>
    </Container>
  );
}

export default ProjectElement;
