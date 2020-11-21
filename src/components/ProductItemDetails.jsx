import React, { useState } from 'react';

import { Button } from './Button';
import { ContainerDetails, ContainerProduct, Price, Article, AvailabilityArticleWrap, Availability, DimensionsContainer, Description, Subtitle, ActionsContainer, Actions, SpecificationContainer, DescriptionKey, ShowMore, PriceContainer, CurrentPrice, PreviousPrice, SubtitleBox } from '../pages/Product/StyledProductPage';
import { RegularIconFavorite } from './ProductItem/IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from './ProductItem/IconsSvg/SolidIconFavorite';
import { Title } from './Title/Title';
import { ProductCounter } from './Counter/ProductCounter';
import { ProductSlider } from './ProductSlider';
import { IconSale } from './ProductItem/IconsSvg/IconSale';
import { IconNew } from './ProductItem/IconsSvg/IconNew';
import { IconTopRated } from './ProductItem/IconsSvg/IconTopRated';
import useWindowDimensions from '../utils/useWindowDimensions';

export const ProductItemDetails = (props) => {
    const { name, isSale, currentPrice, previousPrice, brand, quantity, itemNo, isNewProduct, isTopRated, description, sizes, specifications, product, btnInCart, btnHeandler, inFavorite, addToFav, removeFromFav} = props;
    const { screenWidth } = useWindowDimensions();
    const [isSpecification, setIsSpecification] = useState(false);
    const [isDimensions, setIsDimensions] = useState(false);
    const [value, setValue] = useState(1);

    const toggleSpecificationBtn = () => {
        if (isSpecification) {
            return (
                <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
            )
        }
        return (
            <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
        )
    };

    const toggleDimensionsBtn = () => {
        if (isDimensions) {
            return (
                <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
            )
        }
        return (
            <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
        )
    };

    return (
        <>
            <Title text={name} />
            <ContainerDetails>
                <ProductSlider id={product._id} />
                <ContainerProduct>
                    {isSale &&
                        <PriceContainer>
                            <CurrentPrice>{currentPrice.toLocaleString()}</CurrentPrice>
                            <PreviousPrice>{previousPrice.toLocaleString()}</PreviousPrice>
                        </PriceContainer>}
                    {!isSale &&
                        <PriceContainer>
                            <Price>{currentPrice.toLocaleString()}</Price>
                        </PriceContainer>}
                    {!inFavorite && <RegularIconFavorite onClick={() => addToFav(product)} />}
                    {inFavorite && <SolidIconFavorite onClick={() => removeFromFav(product._id)} />}
                    <Subtitle>Бренд: {brand}</Subtitle>
                    <AvailabilityArticleWrap>
                        {quantity === 0 ? <Availability>&#10006; нет в наличии</Availability> : <Availability>&#10004; в наличии</Availability>}
                        <Article>Артикул: {itemNo}</Article>
                    </AvailabilityArticleWrap>
                    <SubtitleBox>
                        <Subtitle>Описание товара</Subtitle>
                        {isSale && <IconSale />}
                        {isNewProduct && <IconNew />}
                        {isTopRated && <IconTopRated />}
                    </SubtitleBox>
                    <Description>{description}</Description>
                    {screenWidth >= 768
                        ? <>
                            <Subtitle>Габариты</Subtitle>
                            <Description>Высота - {sizes.height} cм, </Description>
                            <Description>Ширина - {sizes.width} cм, </Description>
                            <Description>Глубина - {sizes.length} cм </Description>
                        </> : <>
                            <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
                            {isDimensions && <DimensionsContainer>
                                <Description>Высота - {sizes.height} cм, </Description>
                                <Description>Ширина - {sizes.width} cм, </Description>
                                <Description>Глубина - {sizes.length} cм </Description>
                            </DimensionsContainer>}
                        </>}
                    <ActionsContainer>
                        <Actions>
                            <ProductCounter value={value} setValue={setValue} quantity={quantity} name={name} />
                        </Actions>
                        <Actions>
                            {btnInCart ? <Button disabled width={'13rem'} text={'В корзине'} /> : <Button width={'13rem'} color={'#7191A6'} text={'Купить'} onClick={() => btnHeandler(product, value)} />}
                        </Actions>
                    </ActionsContainer>
                </ContainerProduct>
                {screenWidth >= 768
                    ? <Subtitle>Характеристики
                    <SpecificationContainer>
                            <DescriptionKey>Покрытие</DescriptionKey>
                            <Description>{specifications.covering}</Description>
                            <DescriptionKey>Обивка</DescriptionKey>
                            <Description>{specifications.casing}</Description>
                        </SpecificationContainer>
                    </Subtitle> : <Subtitle>Характеристики
                    {toggleSpecificationBtn()}
                        {isSpecification && <SpecificationContainer>
                            <DescriptionKey>Покрытие</DescriptionKey>
                            <Description>{specifications.covering}</Description>
                            <DescriptionKey>Обивка</DescriptionKey>
                            <Description>{specifications.casing}</Description>
                        </SpecificationContainer>}
                    </Subtitle>}
            </ContainerDetails>
        </>
    )
};