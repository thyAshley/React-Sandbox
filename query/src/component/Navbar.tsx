import React from 'react';
import { SetStateAction } from 'react';

interface NavbarAttribute {
  setPage: React.Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarAttribute> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};

export default Navbar;
