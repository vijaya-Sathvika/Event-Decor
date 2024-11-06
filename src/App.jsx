import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import NavBar from './NavBar';
import Footer from './Footer';
import './App.css';
import axios from 'axios';


const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchImages = async (searchTerm) => {
    const apiKey = 'iW8KYQUreCy5Bv4UreXPBmvADX1L3nFUVXtPsu5SX58J08arPznjvhmr'; 
    setLoading(true);
    setError(null);

    try {
      console.log(`Fetching images for: ${searchTerm}`);
      const response = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=5`, {
        headers: {
          Authorization: apiKey,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setImages(data.photos);
    } catch (error) {
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSelectedCategory(''); 
    fetchImages(term); 
  };

  const handleCategorySelect = (category) => {
    console.log(`Category selected: ${category}`);
    setSelectedCategory(category);
    fetchImages(category); 
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <NavBar onCategorySelect={handleCategorySelect} />
      {error && <div className="error-message">{error}</div>}
      <MainContent 
        images={images} 
        loading={loading} 
        selectedCategory={selectedCategory} 
        onCategorySelect={handleCategorySelect}
      />
      <Footer />
    </div>
  );
};

export default App;
