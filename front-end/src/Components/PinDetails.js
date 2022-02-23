import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import { currencyFormatter } from "../utils";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Container,
  SLink,
  NavContainer,
  NavIcon,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  AddContainer,
  AmountContainer,
  Amount,
  AdminContainer,
  Button,
  Slink,
} from "../Styles/pin-detail-style";


const API = process.env.REACT_APP_API_URL;

function PinDetails({ addToCart }) {
  const [pin, setPin] = useState([]);
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/pins/${id}`)
      .then((res) => {
        setPin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/pins/${id}`)
      .then((res) => {
        navigate("/pins");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
        {/* <NavContainer>
          <NavIcon>
          <ArrowBackIcon />
          </NavIcon>
          BACK
        </NavContainer> */}

      <Wrapper>
        <ImgContainer>
          <Image src={`${API}${pin.image}`} alt={pin.name} />
        </ImgContainer>
        <InfoContainer>
          <Title>{pin.name}</Title>
          <Desc>{pin.description}</Desc>
          <Price>{currencyFormatter.format(pin.price)}</Price>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddIcon onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={() => addToCart(pin, quantity)}>ADD TO CART</Button>
          </AddContainer>
          <AdminContainer>
        <SLink to={`/pins`}>
            <Button>BACK</Button>
      </SLink>
            <Slink to={`/pins/${pin.id}/edit`}>
              <Button>EDIT</Button>
            </Slink>
            <Button onClick={handleDelete}>DELETE</Button>
          </AdminContainer>
        </InfoContainer>
      </Wrapper>
      <Reviews />
    </Container>
  );
}

export default PinDetails;
