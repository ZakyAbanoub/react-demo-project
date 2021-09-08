import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const router = useHistory();

  const favoritesCtx = useContext(FavoritesContext);

  const toHomeHandler = () => {
    router.push("/react-demo-project");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={toHomeHandler}>
        {" "}
        React Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/react-demo-project"> All Meetups </Link>
          </li>
          <li>
            <Link to="/new-meetup"> New Meetup </Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
