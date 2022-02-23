import axios from "axios";
import {useState} from "react";
import {  useNavigate  } from "react-router-dom";
import { Container, Wrapper, Title, Form, Input, Button, Slink, ButtonContainer} from "../Styles/form-style"

const API = process.env.REACT_APP_API_URL;


function PinNewForm() {
  let navigate = useNavigate();

  const [pin, setPin] = useState({
    name: "",
    description: "",
    price: "",
    is_featured: false,
    image: ""
  });

  const addPin = (newPin) => {
    axios.post(`${API}/pins`, newPin)
    .then(()=>{
      navigate(`/pins`)
    },
    (err)=> console.log(err)
    )
    .catch((c)=>console.warn("catch",c))
  }

  const handleTextChange = (event) => {
    setPin({ ...pin, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPin({ ...pin, is_favorite: !pin.is_favorite });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    addPin(pin);
  };


  return (
    <Container>
    <Wrapper>
        <Title>NEW PIN</Title>
        <Form onSubmit={handleSumbit}>
          <label htmlFor="name">Name</label>
            <Input
            id="name"
            value={pin.name}
            type="text"
            onChange={handleTextChange}
            />
            <label htmlFor="description"> Description</label>
            <Input 
            id="description"
            value={pin.description}
            type="text"
            onChange={handleTextChange}
            />
            <label htmlFor="price">Price</label>
            <Input 
            id="price"
            value={pin.price}
            type="number"
            onChange={handleTextChange}
            />
            <label htmlFor="image">Image</label>
            <Input
            id="image"
            value={pin.image}
            type="text"
            onChange={handleTextChange}
             />
            <label htmlFor="is_favorite">Favorite</label>
            <Input 
            id="is_favorite" 
            type="checkbox" 
            onChange={handleCheckboxChange}
            checked={pin.is_featured}
            />
            <ButtonContainer>
            <Button type="submit">SUBMIT</Button>
            <br />
            <Slink to={`/`}>
            <Button>BACK</Button>
            </Slink>
            </ButtonContainer>
        </Form>
    </Wrapper>
</Container>
  )
}

export default PinNewForm