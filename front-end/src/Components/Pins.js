import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import Pin from "./Pin"
const API = process.env.REACT_APP_API_URL;



const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`



function Pins() {

  const [pins, setPins] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/pins`)
    .then((res)=>{
      setPins(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])


  return (
    <Container>
        {pins.map((pin)=>{
          return(
              <Pin key={pin.id} pin={pin}/>
          )
        })}

    </Container>
  )
}

export default Pins