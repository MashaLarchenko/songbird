import React, { useState, useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import Context from '../context';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({
  name, species, setImage, setData, setAnswerState, isAnswerState, id,
}) {
  const [answer, setStatus] = useState('check-btn');
  const styles = useStyle();
  const {
    getBirdData, getBirdImage, rightAnswer, setRightAnswer,
  } = useContext(Context);

  const clickHandler = useCallback(() => {
    Promise.all([getBirdData(species), getBirdImage(species)])
      .then((values) => {
        const [data, photo] = values;
        setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
        setData(data.recordings[0]);
        setAnswerState({
          noRightAnswer: true,
          startQ: true,
          selectedBird: species,
          birdId: id,
        });
        if (rightAnswer.title === species) {
          setAnswerState({
            noRightAnswer: false,
            startQ: true,
            selectedBird: species,
            birdId: id,
          });
          setRightAnswer({
            ...rightAnswer,
            audio: data.recordings[0].file,
            image: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          });
          console.log(rightAnswer);
        }
      });
    if (isAnswerState.noRightAnswer) {
      setStatus('wrongAnswer');
    } else {
      setStatus('rightAnswer');
    }
    // console.log(isAnswerState, rightAnswer);
  }, [species]);

  return (

    <ListItem className={styles.typog}>
      <button
        type="button"
        onClick={clickHandler}
      >
        <span className={answer} />
        {name}
      </button>
    </ListItem>
  );
}

BirdItem.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setAnswerState: PropTypes.func.isRequired,
  isAnswerState: PropTypes.objectOf(PropTypes.bool).isRequired,
  id: PropTypes.number.isRequired,
};

export default BirdItem;
