import {currencyFormatter} from "../utils"

const API = process.env.REACT_APP_API_URL;

function Pin({ pin }) {
  return (
    <div>
      <img src={`${API}/${pin.image}`} alt="pin" />
      <h3>{pin.name}</h3>
      <h4>{pin.description}</h4>
      <h5>{currencyFormatter.format(pin.price)}</h5>
    </div>
  );
}

export default Pin;
