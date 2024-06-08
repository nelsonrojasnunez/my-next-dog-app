import { FaDog, FaHeart } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-2">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2>
            <FaDog /> My Next Dog App
          </h2>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
