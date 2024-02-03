import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ListMenu from './components/Menus';
import Cart from './components/Cart';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState([1])

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Navbar/>
      <div className='flex justify-center h-screen'>
        <Categories onClick={handleCategorySelect}/>
        <ListMenu selectedCategory={selectedCategory}/>
        <Cart/>
      </div>
    </>
  );
}

export default App;
