// src/App.js
import React from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';
import { MainApp } from './components/MainApp';
import BackgroundImage from './assets/background-image.webp'

function App() {
  return (
    <div className='!w-full h-dvh flex flex-col justify-center items-center' style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Card variant='outlined' className='py-3 mx-auto !font-PT-Sans !rounded-2xl shadow-lg w-[600px]'>
        <Typography variant="h6" component="h6" gutterBottom className='text-center py-3 !font-PT-Sans'>
          Simulasi Biaya Impor
        </Typography>
        <MainApp />
      </Card>
    </div>
  );
}

export default App;
