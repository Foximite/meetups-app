import React from 'react'; // Import React for JSX and types
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

interface Meetup {
  id: string;
  image: string;
  title: string;
  address: string;
}

interface Props {
  meetups: Meetup[];
}

function MeetupList(props: Props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;