import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';

const searchResult = query =>
  new Array([''])
    .join('.')
    .split('.')
    .map((item) => {
      const category = `${query}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              <a
                
                href={`http://localhost:4000/products?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            
          </div>
        ),
      };
    });

const SearchBar = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = value => {
    console.log('Search :', value);
  };

  return (

    <AutoComplete
      dropdownMatchSelectWidth="true"
      style={{
        width: 400,
        padding:'10px'
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      backfill="true"
      autoClearSearchValue="true"
    >
      <Input.Search size="large" placeholder="Search here" enterButton />
    </AutoComplete>
  );
};
export default SearchBar;