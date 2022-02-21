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

const API = process.env.REACT_APP_API_URL;

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            {" "}
            <SLink to="/">Rae's Pin Shop</SLink>
          </Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
        {/* 
      <button>
        <Link to="/pins/new">New Pin</Link>
      </button> */}
      </Wrapper>
    </Container>
  );
}

export default NavBar;
