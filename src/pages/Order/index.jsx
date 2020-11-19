import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { device } from "../../styles/breakpoints/breakpoints";
import { Header } from "../../commons/Header/Header";
import { Footer } from "../../commons/Footer";
import { ContactForm } from "../../components/forms/ContactForm/ContactForm";
import { OrderCart } from "./OrderCart";

import { Title } from "../../components/Title/Title";
import { ContentContainer } from "../../styles/GeneralStyledComponents";

import { confirmOrder } from "../../store/order/middlware";
import { getProducts } from "../../store/products/middlware";
import { checkQuantity } from "../../store/cart/middlware";
import { selectProducts } from "../../store/products/selectors";
import { selectCart } from "../../store/cart/selectors";
import { openModal } from "../../store/modal/actions-creators";
import { selectOrder } from "../../store/order/selectors";
import { ScrollToTop } from "../../commons/ScrollToTop";

export const OrderPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const order = useSelector(selectOrder);
  const shortageProducts = checkQuantity(products, cart);

  if (shortageProducts.length) {
    dispatch(
      openModal({
        content: shortageProducts.map((item) => (
          <ModalContentWrapper>
            <ModalTitle>
              Товара
              <ItemInnerWrapper>
                {" "}
                {item.product.name.toLowerCase()}{" "}
              </ItemInnerWrapper>
              не хватает на складе. <br />
            </ModalTitle>
            <ModalTitle>Доступно в количестве {item.quantity}</ModalTitle>
          </ModalContentWrapper>
        )),
      })
    );
  }
  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContainer>
        <Title text="Оформить заказ" />

        <ContainerPage>
          <ComponentContainer>
            <ContactForm
              handleSubmit={(val) => {
                dispatch(confirmOrder(val));
                setTimeout(
                  () =>
                    dispatch(
                      openModal({
                        content: <h2> Ваш заказ № {order.orderNo} принят</h2>,
                      })
                    ),
                  500
                );
              }}
            />

            <OrderCart />
          </ComponentContainer>
        </ContainerPage>
      </ContentContainer>
      <Footer />
    </>
  );
};

const ComponentContainer = styled.div`
  @media ${device.desktop} {
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
  } ;
`;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media ${device.desktop} {
    justify-content: space-between;
    flex-direction: row;
  } ;
`;

const ModalContentWrapper = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.1em;
  margin-bottom: 2rem;
`;

const ItemInnerWrapper = styled.span`
  color: #7191a6;
  font-weight: 700;
`;
