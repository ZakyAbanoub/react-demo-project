import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite(props.meetup);
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            className={classes.image.img}
            src={props.meetup.image}
            alt={props.meetup.title}
          />
        </div>
        <div className={classes.content}>
          <h3> {props.meetup.title} </h3>
          <address> {props.meetup.address} </address>
          <p> {props.meetup.description} </p>
          <div className={classes.actions}>
            <button onClick={toggleFavoritesStatusHandler}>
              {itemIsFavorite && "Remove from Favorites"}
              {!itemIsFavorite && "Add To Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
