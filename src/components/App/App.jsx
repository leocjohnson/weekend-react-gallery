import React from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {
    return (
      <div
        data-testid="app"
        className='container'
      >
        <header>
          <h1>React Gallery</h1>
        </header>
        <GalleryList />
      </div>
    );
}

export default App;
