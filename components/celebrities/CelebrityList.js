import CelebrityItem from './CelebrityItem';
import classes from './CelebrityList.module.css';

function CelebrityList(props) {
  return (
    <ul className={classes.list}>
      {props.celebrities.map((celebrity) => (
        <CelebrityItem
          key={celebrity.id}
          id={celebrity.id}
          image={celebrity.image}
          title={celebrity.title}
          address={celebrity.address}
        />
      ))}
    </ul>
  );
}

export default CelebrityList;
