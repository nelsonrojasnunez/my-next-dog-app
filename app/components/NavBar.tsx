import Link from "next/link";
import { FaDog, FaHeart } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-2">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <FaDog /> My Next Dog App
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
