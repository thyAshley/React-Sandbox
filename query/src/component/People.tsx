import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

interface personAttribute {
  name: string;
  gender: string;
  birth_year: string;
}

const fetchPeople = async (page: number) => {
  const response = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return response.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery(
    ['planets', page],
    () => fetchPeople(page),
    {
      keepPreviousData: true,
    },
  );
  console.log(data);
  return (
    <div>
      <div>People</div>
      {status === 'error' && <div>Error fetching data...</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
            Previous page
          </button>
          <span>{page}</span>
          <button onClick={() => setPage((old) => (data.next ? old + 1 : old))}>
            Next page
          </button>
          {data.results.map((person: personAttribute, idx: string) => (
            <Person person={person} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
