import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

interface PlanetAttribute {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  population: string;
  terrain: string;
}

const fetchPlanets = async (page: number) => {
  const response = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return response.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', () => fetchPlanets(page));
  const [page, setPage] = useState(1);
  console.log(data);
  return (
    <div>
      <div>Planets</div>
      {status === 'error' && <div>Error fetching data...</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet: PlanetAttribute, idx: string) => (
            <Planet key={idx} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
