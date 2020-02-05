import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from './AudioPlayer';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: '#303030',
  },
  typog: {
    color: 'white',
  },
}));

export default function BirdDescription() {
  const styles = useStyle();
  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <img src="src/assets/unknownbird.jpg" alt="unknownbird" />
        <Typography variant="h4" component="h4" className={styles.typog}>
          Bird Name
        </Typography>
        <Typography variant="h5" component="h5" className={styles.typog}>
          Latin  Name
        </Typography>
        <AudioPlayer />
        <p className={styles.typog}>
          Description
        </p>
      </CardContent>
    </Card>
  );
}
