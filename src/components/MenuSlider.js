// src/components/MenuSlider.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';

const menuItems = [
  { id: 1, name: 'Shira', calories: '480gm', price: '₹80', image: '/images/Shira.jpg', modelPath: '/models/Shira.glb', gltfModel : ''},
  { id: 2, name: 'Uthappa', calories: '400gm', price: '₹90', image: '/images/Uthappa.jpg', modelPath: '/models/Uttappa.glb', gltfModel : ''  },
  ];

  const MenuSlider = ({ onSelectItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Handle the left and right navigation
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
    };
  
    // Call onSelectItem when currentIndex changes
    useEffect(() => {
      onSelectItem(menuItems[currentIndex]);
    }, [currentIndex, onSelectItem]);
  
    return (
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ position: 'relative' }}>
        <IconButton
          onClick={handlePrev}
          sx={{ position: 'absolute', left: 10, zIndex: 1 }}
          aria-label="Previous"
        >
            Previous
          {/* <ArrowBack /> */}
        </IconButton>
  
        <Card
          sx={{
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            minWidth: 300,
            maxWidth: 300,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={menuItems[currentIndex].image}
            alt={menuItems[currentIndex].name}
          />
          <CardContent>
            <Typography variant="h6">{menuItems[currentIndex].name}</Typography>
            <Typography variant="body2">Calories: {menuItems[currentIndex].calories}</Typography>
            <Typography variant="body2">Price: {menuItems[currentIndex].price}</Typography>
          </CardContent>
        </Card>
  
        <IconButton
          onClick={handleNext}
          sx={{ position: 'absolute', right: 10, zIndex: 1 }}
          aria-label="Next"
        >
          {/* <ArrowForward /> */}
          Next
        </IconButton>
      </Box>
    );
  };

export default MenuSlider;
