import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  SLink,
  Right,
  MenuItem,
} from "../Styles/navbar-style.js";
import { useState } from "react";


function NavBar({cart}) {
 
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search"/>
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <SLink to="/">Pin Shop</SLink>
          </Logo>
        </Center>
        <Right>
        <SLink to="/pins/new">
          <MenuItem>NEW PIN</MenuItem>
          </SLink>
          {/* <SLink to="/register">
          <MenuItem>Register</MenuItem>
          </SLink>
          <SLink to="/login">
          <MenuItem>Sign In</MenuItem>
          </SLink> */}
          <MenuItem>
          <SLink to="/cart">
            <Badge badgeContent={cart.map(item => item.quantity).reduce((a,b) => a + b,0)} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </SLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
