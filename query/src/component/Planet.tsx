import React from 'react';

interface PlanetAttribute {
  planet: {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    population: string;
    terrain: string;
  };
}

const Planet: React.FC<PlanetAttribute> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
