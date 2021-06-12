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
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  z-index: 0;
  width: 260px;
  height: 260px;
  border-radius: 20px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
`;

const Title = styled.h3`
  margin: 0;
  text-shadow: 0px 0px 3px ${props => props.theme.MAIN_COLOR};
  color: ${props => props.theme.DARK_COLOR};
  z-index: 1;
`;

const Status = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1.25rem;
  color: ${props => props.theme.DARK_COLOR};
  text-shadow: 0px 0px 3px ${props => props.theme.MAIN_COLOR};
  z-index: 1;
`;

const Summary = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1.25rem;
  color: ${props => props.theme.DARK_COLOR};
  text-shadow: 0px 0px 3px ${props => props.theme.MAIN_COLOR};
  z-index: 1;
`;

const Time = styled.div`
  font-size: ${props => props.theme.SMALL_SIZE};
  line-height: 1rem;
  position: absolute;
  z-index: 1;
  bottom: 16px;
  color: ${props => props.theme.DARK_COLOR};
  text-shadow: 0px 0px 3px ${props => props.theme.MAIN_COLOR};
`;

function ProjectElement(props) {
  const {title, status, summary, time, thumbnail, path} = props;

  return (
    <Container to={path}>
      <BackgroundImage url={thumbnail} />
      <Title>{title}</Title>
      <Status>{status}</Status>
      <Summary>{summary}</Summary>
      <Time>{time}</Time>
    </Container>
  );
}

export default ProjectElement;
