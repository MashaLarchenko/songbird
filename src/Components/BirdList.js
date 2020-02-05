import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyle = makeStyles(() => ({
  sectionWrapper: {
    backgroundColor: '#303030',
  },
}));

export default function BirdList() {
  const styles = useStyle();
  return (
    <Card className={styles.sectionWrapper}>
      <CardContent>
        <List>
          <ListItem>
            <span className="check-btn" />
            Ворон
          </ListItem>
          <ListItem>
            <span className="check-btn" />
            Журавль
          </ListItem>
          <ListItem>
            <span className="check-btn" />
            Ласточка
          </ListItem>
          <ListItem>
            <span className="check-btn" />
            Козодой
          </ListItem>
          <ListItem>
            <span className="check-btn" />
            Кукушка
          </ListItem>
          <ListItem>
            <span className="check-btn" />
            Синица
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
