import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <div className={classes.logoContainer}>
            <NavLink to="/s">
              <img className={classes.logo} src={logo} alt="logo" />
            </NavLink>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
