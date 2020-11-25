import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 0;
`;

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  column-gap: 12px;
`;

const DescriptionText = styled.p`
  font-size: ${(props) => props.theme.SMALL_SIZE};
  font-weight: 100;
  margin: 0;
`;

function AboutElement({data, openModal}) {
  const {title, descriptions} = data;
  return (
    <Container onClick={openModal}>
      <Title>{title}</Title>
      <DescriptionGroup>
        {
          descriptions.map((description, i) => {
            return (
              <Description>
                <DescriptionText>{description.main}</DescriptionText>
                <DescriptionText>{description.time}</DescriptionText>
              </Description>
            );
          })
        }
      </DescriptionGroup>
    </Container>
  );
}

export default AboutElement;
