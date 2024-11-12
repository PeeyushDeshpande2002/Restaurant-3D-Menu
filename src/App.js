// src/App.js
import React, { useState } from 'react';
import MenuSlider from './components/MenuSlider';
import ModelViewer from './components/ModelViewer';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Restaurant Menu 3D
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Explore Our Menu
        </Typography>

        

        <Box mt={4} display="flex" justifyContent="center" alignItems="center">
          {selectedItem ? (
            <>
              <Typography variant="h5" align="center" gutterBottom>
                {selectedItem.name}
              </Typography>
              <ModelViewer modelPath={selectedItem.modelPath} />
            </>
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              Select an item to view in 3D
            </Typography>
          )}
        </Box>
        <MenuSlider onSelectItem={handleSelectItem} />
      </Container>
    </div>
  );
}

export default App;
