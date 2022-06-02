import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './CelebrityItem.module.css';

function MeetupItem(props) {
  // navigate programmatically!
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/celebrtities/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
