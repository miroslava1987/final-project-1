import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '../../commons/Header/Header';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectById } from '../../store/promotions/selectors';
import { getPromotions } from '../../store/promotions/middlware';
import { device } from '../../styles/breakpoints/breakpoints';
import { Footer } from '../../commons/Footer';

export const PromotionsSinglePage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  const single = useSelector(selectById(match.params.route))

  return (
    <>
      {single && (
        <>
          <Header />
          <Container>
            <ImageContainer>
              <Image src={single.desctopSliderImageUrl} />
            </ImageContainer>
          </Container>
          <ContentContainer>
            <ContentContainerPromo>
              <Title>{single.title}</Title>
              <Description>{single.fullDescription}</Description>
            </ContentContainerPromo>
          </ContentContainer>
          <Footer />
        </>
      )}
    </>
  )
}
export const Container = styled.div`
width: 100%;
`;

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position:relative;
width:100%;
padding-bottom:20%;
`;

export const Image = styled.img`
position:absolute;
top: 0;
width:100%;
height: auto;
`;

export const Title = styled.span`
font-size: 1.8rem;
font-weight: 600;
line-height: 1.5;
display: inline-block;
margin-bottom: 1.5rem;
  @media ${device.tabletM}{
    font-size: 2.4rem;
    margin-bottom: 2rem;
  };
  @media ${device.tabletL}{
    font-size: 2.6rem;
  };
`;

export const ContentContainerPromo = styled.div`
  @media ${device.tabletM}{
    width: 60%;
  };
`;

export const Description = styled.span`
font-size: 1.4rem;
line-height: 1.5;
display: inline-block;
  @media ${device.tabletM}{
    font-size: 1.6rem;
};
`;
