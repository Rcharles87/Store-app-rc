import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;



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
    <article>
      <h3>{pin.name}</h3>
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
      <Reviews />
    </article>
  )
}

export default PinDetails