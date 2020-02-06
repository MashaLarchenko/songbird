/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
// import Context from '../context';
import BirdItem from './BirdItem';
import birdState from './birdState';


const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

export default function BirdList({ levelCount, setImage, setData }) {
  const getBirdData = async (query) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://www.xeno-canto.org/api/2/recordings?query=${query}`;
    const resp = await fetch(proxyUrl + targetUrl);
    const data = await resp.json();
    setData(data.recordings[0]);
    console.log('data');
  };

  const getBirdImage = async (query) => {
    const resp = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d1d5151746b40e69e612092dc0de65bf&tagmode=all&extras=urlm&format=json&nojsoncallback=1&tags=${query}`);
    const data = await resp.json();
    const photo = data.photos.photo[0];
    setImage(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`);
    console.log('img');
  };
  const styles = useStyle();
  // const { birdData } = useContext(Context);
  const birdList = birdState[0][levelCount];


  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <List>
          {birdList.map((bird) => (
            <button type="button" onClick={() => { getBirdData(bird.species); getBirdImage(bird.species); console.log('hjj'); }}>
              <BirdItem name={bird.name} key={bird.id} />
            </button>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
