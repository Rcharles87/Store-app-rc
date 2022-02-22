import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import styled from "styled-components";
import { currencyFormatter } from "../utils";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const API = process.env.REACT_APP_API_URL;


const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 50vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color: #f8f4f4;
}
`


function PinDetails() {
  const [pin, setPin] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/pins/${id}`)
    .then((res)=>{
      setPin(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[id]);

  const handleDelete = () => {
    axios.delete(`${API}/pins/${id}`)
    .then((res)=>{
      navigate("/pins")
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <Container>

      <Wrapper>
        <ImgContainer>
        <Image src={`${API}/${pin.image}`}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{pin.name}</Title>
          <Desc>{pin.description}</Desc>
          <Price>{currencyFormatter.format(pin.price)}</Price>

          <AddContainer>
            <AmountContainer>
              <RemoveIcon/>
              <Amount>1</Amount>
              <AddIcon/>
              </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <h3>{pin.name}</h3>
      <img src={`${API}/${pin.image}`} alt="pin" />
      <h5>{pin.description}</h5>
      <h6>{pin.price}</h6>
      <div>

      <div>
      <Link to={`/pins`}>
      <button>Back</button>
      </Link>
      </div>

      <div>

      <Link to={`/pins/${pin.id}/edit`}>
      <button >Edit</button>
      </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      </div>
      <Reviews /> */}
    </Container>
  )
}

export default PinDetails