import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function BirdList() {
  return (
    <Card>
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
