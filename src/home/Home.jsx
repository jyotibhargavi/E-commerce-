import React, { useState } from 'react';
import productData from "../products.json";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    //filtering
    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredProducts(filtered);
  };

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          <h2>Search Your One From Our Products</h2> 
          <form type="text" name="search" id="search" placeholder="Search your products" value={searchInput} onChange={handleSearch}></form>
          <p>We have the Collection of products</p>
        </div>
      </div>
    </div>
  );
};

export default Home;