import React, { useState } from 'react';
import CategoryMenu from './components/CategoryMenu';
import PostList from './components/PostList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div>
      <h1>Category Posts App</h1>
      <CategoryMenu onSelectCategory={handleSelectCategory} />
      {selectedCategory && <PostList categoryId={selectedCategory} />}
    </div>
  );
};

export default App;
