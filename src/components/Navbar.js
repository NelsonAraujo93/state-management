import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector ((state) => state.cart)
  return (
    <nav>
      <div className="nav-center">
        <h3>this is new</h3>
        <AiOutlineShoppingCart />
        <div>{amount}</div>
      </div>
    </nav>
  );
}

export default Navbar;
