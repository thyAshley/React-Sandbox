import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

interface personAttribute {
  name: string;
  gender: string;
  birth_year: string;
}

const fetchPeople = async () => {
  const response = await fetch('http://swapi.dev/api/people/');
  return response.json();
};

const People = () => {
  const { data, status } = useQuery('planets', fetchPeople);

  console.log(data);

  return (
    <div>
      <div>People</div>
      {status === 'error' && <div>Error fetching data...</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person: personAttribute, idx: string) => (
            <Person person={person} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
