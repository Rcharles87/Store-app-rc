import {currencyFormatter} from "../utils"
import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`

const API = process.env.REACT_APP_API_URL;

function Pin({ pin }) {
  return (
    <Container>
      <Circle/>
      <Image src={`${API}/${pin.image}`} alt="pin" />
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>

        <Icon>
          <SearchIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>

      {/* <h3>{pin.name}</h3>
      <h4>{pin.description}</h4>
      <h5>{currencyFormatter.format(pin.price)}</h5> */}
    </Container>
  );
}

export default Pin;
