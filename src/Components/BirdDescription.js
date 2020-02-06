import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Context from '../context';
import AudioPlayer from './AudioPlayer';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
  typog: {
    color: 'white',
  },
  image: {
    width: '35%',
  },
}));


export default function BirdDescription() {
  const styles = useStyle();
  const { birdData, image } = useContext(Context);

  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <img src={image} alt="unknownbird" className={styles.image} />
        <Typography variant="h4" component="h4" className={styles.typog}>
          {birdData.en}
        </Typography>
        <Typography variant="h5" component="h5" className={styles.typog}>
          {birdData.gen + birdData.sp}
        </Typography>
        <Typography variant="h5" component="h5" className={styles.typog}>
          Location
          {birdData.loc}
        </Typography>
        <AudioPlayer />
        <p className={styles.typog}>
          Description
        </p>
      </CardContent>
    </Card>
  );
}
