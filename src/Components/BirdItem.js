import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  typog: {
    color: 'white',
  },
}));

function BirdItem({
  name, species, setImage, setData, setAnswerState, isAnswerState,
}) {
  const [answer, setStatus] = useState('check-btn');
  const styles = useStyle();

  // let checkBtn = 'check-btn';

  const getBirdData = async (query) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://www.xeno-canto.org/api/2/recordings?query=${query}`;
    const resp = await fetch(proxyUrl + targetUrl);
    const data = await resp.json();
    return data;
  };

  const getBirdImage = async (query) => {
    const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d1d5151746b40e69e612092dc0de65bf&tagmode=all&extras=urlm&format=json&nojsoncallback=1&tags=${query}`);
    const data = await resp.json();
    return data.photos.photo[0];
  };

  const clickHandler = () => {
    Promise.all([getBirdData(species), getBirdImage(species)])
      .then((values) => {
        const [data, photo] = values;
        setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
        setData(data.recordings[0]);
        setAnswerState({
          noRightAnswer: true,
          startQ: true,
        });
      });
    if (isAnswerState.noRightAnswer) {
      setStatus('wrongAnswer');
      // console.log(checkBtn);
    } else {
      setStatus('rightAnswer');
      // console.log(checkBtn);
    }
  };

  return (

    <ListItem className={styles.typog}>
      {console.log(answer) }
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
  isAnswerState: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BirdItem;
