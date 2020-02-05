import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from './AudioPlayer';

export default function BirdDescription() {
  return (
    <Card>
      <CardContent>
        <img src="src/assets/unknownbird.jpg" alt="unknownbird" />
        <Typography variant="h4" component="h4">
          Bird Name
        </Typography>
        <Typography variant="h5" component="h5">
          Latin  Name
        </Typography>
        <AudioPlayer />
        <p>
          Description
        </p>
      </CardContent>
    </Card>
  );
}
