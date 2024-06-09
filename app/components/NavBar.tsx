import Link from "next/link";
import { FaDog, FaHeart } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary mt-2"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <FaDog /> My Next Dog App
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
