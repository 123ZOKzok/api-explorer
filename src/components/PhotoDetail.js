import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PhotoDetail = ({ photo }) => {
  if (!photo) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={photo.urls.regular}
        alt={photo.alt_description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {photo.description || 'Untitled'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {photo.user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Downloads: {photo.downloads}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <a href={photo.links.download} target="_blank" rel="noopener noreferrer">
            Download Link
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoDetail;
