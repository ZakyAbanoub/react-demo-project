import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();

  const onAddMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetups-3-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <div>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
