import { useState } from "react";
import { currencyFormatter } from "../utils";
import AddIcon from "@mui/icons-material/Add";
import { Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  SLink
} from "../Styles/cart-style";

const API = process.env.REACT_APP_API_URL;

const Cart = ({cart, subtotal, setCart, setTotal}) => {
    let shipping = 5
    let discount = -5
    let total = subtotal + shipping + discount

    let navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false);
    };


const handleCheckoutButton = () =>{
  setOpen(!open)
  setCart([])
  setTotal(0)
  setTimeout(()=> navigate("/"), 2000)
}


    

console.log(cart)
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <SLink to={`/pins`}>
          <TopButton>CONTINUE SHOPPING</TopButton>
            </SLink>
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
                        {/* <AddIcon /> */}
                        <ProductAmount>{item.quantity}</ProductAmount>
                        {/* <RemoveIcon /> */}
                      </ProductAmountContainer>
                      <ProductPrice>
                        {currencyFormatter.format(Number(item.price)* item.quantity )}
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
              <SummaryItemText>{currencyFormatter.format(subtotal )}</SummaryItemText>
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
            <Button onClick={handleCheckoutButton}>CHECKOUT NOW</Button>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              Thank you for your Purchase
              <br />
              your total was: {currencyFormatter.format(total)}
              <br />
              total number of items: {cart.map(item => item.quantity).reduce((a,b) => a + b,0)}
            </Backdrop>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
