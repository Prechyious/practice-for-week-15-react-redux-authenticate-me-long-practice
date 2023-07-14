import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    sessionUser
        ? (sessionLinks = <ProfileButton user={sessionUser} />)
        : (sessionLinks = (
              <>
                  <NavLink to="/login">Log In</NavLink>
                  <NavLink to="/signup">Sign Up</NavLink>
              </>
          ));

    return (
        <ul className="nav-links">
            <li className="home">
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <div className="links">{isLoaded && sessionLinks}</div>
        </ul>
    );
};

export default Navigation;
