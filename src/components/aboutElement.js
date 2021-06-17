import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.DARK_COLOR};
  padding: 16px 24px;
  border-radius: 20px;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  font-weight: 400;
  margin: 0;
  margin-right: 24px;
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
  line-height: 1.5rem;
`;

const DetailGroup = styled.div`
  height: ${(props) => props.height};
  overflow: hidden;
  margin-top: ${(props) => props.is_opened ? '12px' : '0'};
  transition: all 0.5s ease;
`;

const Detail = styled.p`
  margin: 0;
`;

function AboutElement({data}) {
  const [is_opened, setIsOpened] = useState(false);
  const [h, setHeight] = useState('0');

  const accrodion_element = useRef(null);
  const description_element = useRef(null);
  const detail_element = useRef(null);

  const {title, descriptions, detail} = data;
  const final_position = descriptions[descriptions.length - 1];

  const handleAccordion = () => {
    const description_element_height = description_element.current.clientHeight;
    const detail_element_height = detail_element.current.clientHeight;
    const accordion_content_height = description_element_height + detail_element_height;

    if (is_opened) {
      setHeight(`0`);
    } else {
      setHeight(`${accordion_content_height}px`);
    }

    setIsOpened((current) => !current);
  };

  return (
    <Container onClick={handleAccordion}>
      <TitleGroup>
        <Title>{title}</Title>
        <Description>
          <DescriptionText>{final_position.main}</DescriptionText>
          <DescriptionText>{final_position.time}</DescriptionText>
        </Description>
      </TitleGroup>
      <DetailGroup is_opened={is_opened} ref={accrodion_element} height={h}>
        <DescriptionGroup ref={description_element}>
          {
            descriptions.length > 1 ?
              descriptions.map((description) => {
                return (
                  <Description key={description.main}>
                    <DescriptionText>{description.main}</DescriptionText>
                    <DescriptionText>{description.time}</DescriptionText>
                  </Description>
                );
              }) :
              null
          }
        </DescriptionGroup>
        <Detail ref={detail_element}>
          {detail}
        </Detail>
      </DetailGroup>
    </Container>
  );
}

export default AboutElement;
