import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const unsplashAPI = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  },
});

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await unsplashAPI.get('/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={photo.urls.small}
                alt={photo.alt_description}
                onClick={() => handlePhotoClick(photo)}
                style={{ cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {photo.description || 'Untitled'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {photo.user.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedPhoto && <PhotoDetail photo={selectedPhoto} />}
    </div>
  );
};

export default PhotoGallery;
