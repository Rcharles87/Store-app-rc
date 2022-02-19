import { Link } from "react-router-dom"
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 25px;
`

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <SearchIcon style={{color:"grey", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Rae's Pin Shop</Logo>
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
      {/* <h1>
        <Link to="/pins">Rae's Pin Shop</Link>
      </h1>
      <button>
        <Link to="/pins/new">New Pin</Link>
      </button> */}
      </Wrapper>
    </Container>
  )
}

export default NavBar