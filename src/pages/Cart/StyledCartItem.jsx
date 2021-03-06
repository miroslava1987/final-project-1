import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const CartContainer = styled.div`
max-width: 120rem;
margin: 0 auto;
text-align: center;
`;

export const CartMenu = styled.div`
background-color: #F5F5F5;

  @media ${device.mobile}{
    display: none;
  };
  @media ${device.tabletS}{
    grid-template-columns: 31% 1fr 27% 19%;
    padding: 0.7rem 1.1rem 0.7rem calc(3% + 7rem);
    display: ${props => (props.fav ? 'none' : 'grid')};
    align-items: center;
  };
  @media ${device.tabletM}{
  grid-template-columns: 31% 28% 18% 25%;
  padding: 0.7rem 0.8rem 0.7rem 14%;
  display: grid;
  }

  p {
    font-size: 1em;
    margin: 0;
    padding: 2rem;
    color: #7191A6;
    font-weight: bold;
  };
`;

export const CartTotalContainer = styled.div`
display: flex; 
max-width: 120rem;
margin: 0 auto;
  @media ${device.mobile}{
    padding-top: 1rem;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  };
  @media ${device.tabletS}{
    padding-top: 3rem;
    flex-wrap: wrap;
    text-align: center;
    // justify-content: flex-end;
  };
  @media ${device.tabletM}{
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
  };
`;

export const CartTotalText = styled.h4`
font-size: 1.5rem;
color: #000000;
font-weight: bold;
  @media ${device.tabletS}{
    width: 100%;
  };
  @media ${device.tabletM}{
    width: inherit;
  };
`;

export const CartItemContainer = styled.div`
        align-items: center;
        display: grid;
        padding: 1.7rem;
        border-bottom: 1px solid #D3D7DA;
        font-size: 14px;

        :last-child {
                border-bottom: 2px solid #7191A6;
        }

        @media ${device.mobile}{
        grid-template-columns: 7rem 1fr 15rem;
        padding: 1.7rem 0.5rem;
        position: relative;
        grid-gap: 1rem;
        }

        @media ${device.tabletS}{
          grid-template-columns: ${props => (props.fav ? '5% 5.5rem 1fr 1fr 13rem' : '3% 6rem 26% 21% 21% 20%')};
          //grid-template-columns: 3% 13% 26% 21% 21% 20%;
          position: static;
          grid-gap: inherit;
          }

          @media ${device.tabletM}{
          grid-template-columns: 5% 7% 30% 20% 20% 1fr;
        }
        `;

export const CartImage = styled.img`
max-width: 100%;
height: auto;
max-height: 5rem;
padding-left: 1rem;

  @media ${device.mobile} {
    grid-row-end: 4;
    grid-column-end: 4;
  }

  @media ${device.tabletS} {
    grid-row-end: auto;
  }
`;

export const CartNameCode = styled.div`
  text-align: left;

  h4 {
    font-weight: bold;
    color: #000000;
    margin: 0;
  }

@media ${device.tabletS}{
  font-size: 13px;
  text-align: center;
  padding-left: 10px;
}

@media ${device.tabletM}{
  font-size: 14px;
  text-align: center;
  width: 100%;
}

  p {
    color: #57646e;
    display: block;
    font-size: 12px;
    margin: 0;
  }
`;

export const CartColor = styled.p`
  color: #000000;

  @media ${device.mobile} {
    grid-column-start: 2;
    grid-column-end: 4;
    text-align: left;
    margin: 0;
    font-size: 12px;
  }

  @media ${device.tabletS} {
    grid-area: auto;
    font-size: 13px;
    text-align: center;
  }

  @media ${device.tabletM} {
    font-size: 14px;
  }
`;

export const CartPrice = styled.p`
  font-weight: bold;
  font-family: inherit;
  color: #000000;
  margin: 0;

  @media ${device.mobile} {
    //text-align: left;
    //grid-row-start: 3;
    grid-column-end: 4;
  }

  @media ${device.tabletS} {
    font-size: 13px;
    text-align: inherit;
    grid-column-end: auto;
  }

  @media ${device.tabletM} {
    font-size: 14px;
  }
`;

export const CloseBtnContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  fill: #a0a9af;
  &:hover {
    fill: #c91212;
    cursor: pointer;
  }

  @media ${device.mobile} {
    position: absolute;
    top: 1rem;
    right: 1.7rem;
    width: 2rem;
  }

  @media ${device.tabletS} {
    position: inherit;
    width: 2rem;
  }
`;

export const CartEmpty = styled.p`
padding-bottom: 200px;
font-family: inherit;
`;

export const CartButtonHolder = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100px;

@media ${device.tabletM} {
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: inherit;
}
`;

export const OrderCartMenu = styled.div`
background-color: #F5F5F5;

  @media ${device.mobile}{
    display: none;
  };
  @media ${device.tabletS}{
    grid-template-columns: 31% 17% 35% 11%;
    padding: 0.7rem 1.1rem 0.7rem calc(1% + 7rem);
    display: ${props => (props.fav ? 'none' : 'grid')};
    align-items: center;
  };
  @media ${device.tabletM}{
  grid-template-columns: 31% 17% 38% 8%;
  padding: 0.7rem 0.8rem 0.7rem calc(1% + 7rem);
  display: grid;
  }

  p {
    font-size: 1em;
    margin: 0;
    padding: 2rem;
    color: #7191A6;
    font-weight: bold;
  };
`;

export const OrderCartItemContainer = styled.div`
        align-items: center;
        display: grid;
        padding: 1.7rem;
        border-bottom: 1px solid #D3D7DA;
        font-size: 14px;

        :last-child {
                border-bottom: 2px solid #7191A6;
        }

        @media ${device.mobile}{
        grid-template-columns: 6rem 1fr 9rem;
        padding: 0.7rem 1rem;
        position: relative;
        grid-gap: 1rem;
        }

        @media ${device.tabletS}{
          grid-template-columns: 2rem 6rem 1fr 1fr 1fr 18%;
          position: static;
          grid-gap: inherit;
          }
        `

export const OrderCartImage = styled.img`
height: auto;
width: 5rem;
padding-left: 0.5rem;

@media ${device.mobile}{
grid-row-end: span 3;
grid-row-end: span 3;
}
`

export const OrderCartNameCode = styled.div`
text-align: left;

h4 {
    font-weight: bold;
    color: #000000;
    font-family: Open Sans;
    margin: 0;
}

@media ${device.tabletS}{
  font-size: 13px;
}

@media ${device.tabletM}{
  font-size: 14px;
}

p {
color: #57646E;
display: block;
font-size: 12px;
margin: 0;
}
`

export const CartText = styled.p`
color: #000000;

@media ${device.mobile} {
  grid-column-start: 2;
  grid-column-end: 4;
  text-align: left;
  margin: 0;
  font-size: 12px;
}

@media ${device.tabletS} {
  grid-area: auto;
  font-size: 13px;
  text-align: center;
}

@media ${device.tabletM} {
  font-size: 14px;
}
`;
