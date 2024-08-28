import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, image, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300, width: '100%' , objectFit: 'cover' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color: '#ed8ca1', fontWeight: 600}}>
          {title}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="large" sx={{color: '#9c8284c8'}}>View Product</Button>
      </CardActions>
    </Card>
  );
}
