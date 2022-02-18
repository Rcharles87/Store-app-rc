import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import Pin from "./Pin"

const API = process.env.REACT_APP_API_URL;

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
    <div>
      <article>
        {pins.map((pin)=>{
          return(
            <Link to={`/pins/${pin.id}`}>
              <Pin pin={pin}/>
            </Link>
          )
        })}
      </article>
    </div>
  )
}

export default Pins