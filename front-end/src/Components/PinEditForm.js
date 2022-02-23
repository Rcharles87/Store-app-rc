import axios from "axios";
import {useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Container, Wrapper, Title, Form, Input, Button, Slink, ButtonContainer} from "../Styles/form-style"

const API = process.env.REACT_APP_API_URL;

const  PinEditForm = () => {
  let { id } =useParams();
  let navigate = useNavigate();

  const [pin, setPin] = useState({
    name: "",
    description: "",
    price: "",
    is_featured: false,
    image: ""
  });

  useEffect(()=>{
    axios.get(`${API}/pins/${id}`)
    .then((res)=>{
      setPin(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[id])
  

  const updatePin = (updatedPin) => {
    axios.put(`${API}/pins/${id}`, updatedPin)
    .then(()=>{
      navigate(`/pins/${id}`)
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
    updatePin(pin, id);
  };


  return (
    <Container>
    <Wrapper>
        <Title>EDIT</Title>
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
            <label htmlFor="is_featured">Favorite</label>
            <Input 
            id="is_featured" 
            type="checkbox" 
            onChange={handleCheckboxChange}
            checked={pin.is_featured}
            />
            <ButtonContainer>
            <Button type="submit">SUBMIT</Button>
            <br />
            <Slink to={`/pins/${id}`}>
            <Button>BACK</Button>
            </Slink>
            </ButtonContainer>
        </Form>
    </Wrapper>
</Container>
  )
}

export default PinEditForm