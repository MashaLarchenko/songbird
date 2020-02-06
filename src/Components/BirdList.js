import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Context from '../context';
import BirdItem from './BirdItem';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: 'rgba(48,48,48, .9)',
  },
}));

export default function BirdList() {
  const styles = useStyle();
  const { birdData } = useContext(Context);
  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <List>
          <BirdItem name={birdData.en} />
        </List>
      </CardContent>
    </Card>
  );
}
