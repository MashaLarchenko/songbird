import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import QuestionBlock from './Components/QuestionBlock';
import BirdList from './Components/BirdList';
import BirdDescription from './Components/BirdDescription';
import Context from './context';


const style = {
  questContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '2%',
    gridColumnGap: '10px',
  },
};

const NextButton = withStyles({
  root: {
    width: '100%',
    margin: '25px 15px',
    backgroundColor: 'rgba(48,48,48, .9)',
    border: '1px solid #444',
    color: '#fff',
    cursor: 'auto',
    transition: '.3s',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function App() {
  const [birdData, setData] = useState('no data');
  const [image, setImage] = useState('src/assets/unknownbird.jpg');

  useEffect(async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.xeno-canto.org/api/2/recordings?query=Delichon urbicum';
    const resp = await fetch(proxyUrl + targetUrl);
    const data = await resp.json();
    setData(data.recordings[0]);
    // const photo = data.photos.photo[0];
    // setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
  }, []);

  useEffect(async () => {
    const resp = await fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d1d5151746b40e69e612092dc0de65bf&tagmode=all&extras=urlm&format=json&nojsoncallback=1&tags=Delichon urbicum');
    const data = await resp.json();
    const photo = data.photos.photo[0];
    setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
  }, []);
  return (
    <Context.Provider value={{ birdData, image }}>
      <Header />
      <QuestionBlock />
      <Container style={style.questContainer}>
        <BirdList />
        <BirdDescription />
      </Container>
      <NextButton variant="outlined" disabled>Next level</NextButton>
    </Context.Provider>
  );
}
