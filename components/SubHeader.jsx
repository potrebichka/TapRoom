import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
  const header = {
    marginTop: '-20px',
    backgroundColor: 'rgba(0,0,0,0.9)'
  };

  const nav = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  const navItem = {
    fontSize: '26px',
    textDecoration: 'none',
    color: 'white',
    textShadow: '1px 1px white',
    borderLeft: '1px solid white',
    borderBottom: '1px solid white',
    padding: '10px'
  };
  return (
    <header style={header}>
      <nav style={nav}>
        <Link to='/newkeg' style={navItem}>Add a New Keg</Link>
      </nav>
    </header>
  );
};

export default SubHeader;