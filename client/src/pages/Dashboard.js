import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleStoreData = () => {
    // Store data in COOKIE
    Cookies.set('storedData', input1);
    setInput1('');
  };

  const handleSearchData = () => {
    // Search data in COOKIE
    const storedData = Cookies.get('storedData') || '';
    setSearchResult(storedData);
  };

  const handleClearCookies = () => {
    // Clear all COOKIE
    Cookies.remove('storedData');
    setSearchResult('');
  };

  const handleLogout = () => {
   
    window.location.href = '/'; 
  };

  return (
    <div className='home-2'>
      <h1>Home Page 2</h1>

      <label>Data to Store:</label>
      <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
      <button onClick={handleStoreData}>Store Data</button>

      <label>Search Stored Data:</label>
      <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button onClick={handleSearchData}>Search Data</button>
      <p>Search Result:</p>
      <input type='text' className='textarea' value={searchResult}/>

      <button onClick={handleClearCookies}>Clear Cookies</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;