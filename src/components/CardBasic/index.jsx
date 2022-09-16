import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({Title, Icon, Value}) {
  return (
    <Card sx={{ minWidth: 275 }}>  
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {Title}
        </Typography>
        <Typography style={{fontWeight: 600}} variant="h5" component="div">
          {`R$ ${Value}`}
        </Typography>
      </CardContent>
        <CardActions style={{justifyContent: 'flex-end',}}>
          <Icon/>
        </CardActions>
    </Card>
  );
}
