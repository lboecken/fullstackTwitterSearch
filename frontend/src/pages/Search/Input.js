import React, { useState } from 'react';

const axios = require('axios').default;

function Input() {
  const [searchParams, setSearchParams] = useState();
  const fetchAPI = async (e) => {
    e.preventDefault();
    const query = await axios.get('http://localhost:5000/api/search', {
      params: { query: searchParams },
    });
    return query;
  };

  return (
    <form onSubmit={fetchAPI}>
      <input
        onChange={(e) => {
          setSearchParams(e.target.value);
        }}
        type='text'
        placeholder='Search for your favorite tweets, @users, or #hashtags here...'
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Input;
