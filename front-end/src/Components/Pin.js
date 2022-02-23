// import {currencyFormatter} from "../utils"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Container, Circle, Image, Info, Icon, SLink} from "../Styles/pin-style"



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
          <SLink to={`/pins/${pin.id}`}>
          <SearchIcon/>
          </SLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>

    </Container>
  );
}

export default Pin;
