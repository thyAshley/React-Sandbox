import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Planet from './component/Planets';
import People from './component/People';

function App() {
  const [page, setPage] = useState('planets');
  console.log(page);
  return (
    <div className="App">
      <h1>Star wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planet /> : <People />}
      </div>
    </div>
  );
}

export default App;
