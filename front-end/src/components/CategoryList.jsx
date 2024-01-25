// src/components/CategoryList.js

import React from 'react';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onCategoryClick(category)}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

