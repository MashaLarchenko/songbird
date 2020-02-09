import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
// import Context from '../context';
import PropTypes from 'prop-types';
import BirdItem from './BirdItem';
import birdState from './birdState';


const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

function BirdList({
  levelCount,
  setImage, setData, setAnswerState, isAnswerState, clickHandler,
}) {
  const styles = useStyle();
  const birdList = birdState[0][levelCount];
  // const [classes, setClasses] = useState(['check-dot']);
  // useEffect(() => {
  //   if (isAnswerState.noRightAnswer && isAnswerState.startQ) {
  //     setClasses('wrongAnswer');
  //     console.log(classes);
  //   } else if (!isAnswerState.noRightAnswer && isAnswerState.startQ) {
  //     setClasses('rightAnswer');
  //     console.log(classes);
  //   }
  // }, [isAnswerState]);

  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <List>
          {birdList.map((bird) => (
            <BirdItem
              name={bird.name}
              key={bird.id}
              species={bird.species}
              id={bird.id}
              setImage={setImage}
              setData={setData}
              setAnswerState={setAnswerState}
              isAnswerState={isAnswerState}
              clickHandler={clickHandler}
              // classes={classes}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

BirdList.propTypes = {
  levelCount: PropTypes.number.isRequired,
  setImage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setAnswerState: PropTypes.func.isRequired,
  isAnswerState: PropTypes.shape({
    noRightAnswer: PropTypes.bool,
    startQ: PropTypes.bool,
    selectedBird: PropTypes.string,
    birdId: PropTypes.number,
    isAnswered: PropTypes.bool,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
  // classes: PropTypes.string.isRequired,
  // setStatus: PropTypes.func.isRequired,
};

export default BirdList;
