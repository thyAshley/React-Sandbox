import React from 'react';
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

const fetchPlanets = async () => {
  const response = await fetch('http://swapi.dev/api/planets/');
  return response.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);

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
