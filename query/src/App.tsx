import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from './component/Navbar';
import Planet from './component/Planets';
import People from './component/People';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('planets');
  console.log(page);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planet /> : <People />}
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
