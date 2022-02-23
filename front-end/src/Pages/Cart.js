import { useState } from "react";
import { currencyFormatter } from "../utils";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  PriceDetail,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "../Styles/cart-style";

const API = process.env.REACT_APP_API_URL;

const Cart = ({cart, subtotal}) => {
    let shipping = 5
    let discount = -5

    let total = subtotal + shipping + discount
console.log((subtotal) + shipping + discount)
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.length})</TopText>
            {/* <TopText>Your Wishlist(0)</TopText> */}
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <Product>
                    <ProductDetail>
                      <Image src={`${API}${item.image}`} alt={item.name} />
                      <Details>
                        <ProductName>
                          <b>Product:</b>
                          {item.name}
                        </ProductName>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon />
                      </ProductAmountContainer>
                      <ProductPrice>
                        {currencyFormatter.format(item.price)}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </div>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>{currencyFormatter.format(subtotal)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>{currencyFormatter.format(shipping)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>{currencyFormatter.format(discount)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{currencyFormatter.format(total)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
