import { Link } from "react-router-dom"
function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/pins">Rae's Pin Shop</Link>
      </h1>
      <button>
        <Link to="/pins/new">New Pin</Link>
      </button>
    </nav>
  )
}

export default NavBar