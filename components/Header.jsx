import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const header = {
    marginTop: '30px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: 'black'
  };

  const tapRoomName = {
    fontSize: '35px',
    marginRight: '20px',
    textDecoration: 'none',
    width: '40%',
    margin: '0 auto',
    display: 'block',
    color: 'white'
  };

  const nav = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  const navItem = {
    fontSize: '26px',
    marginRight: '20px',
    textDecoration: 'none',
    color: 'white',
    textShadow: '1px 1px white'
  };
  return (
    <header style={header}>
      <nav style={nav}>
        <Link to='/' style={tapRoomName}>Fort Epicodus Tap Room</Link>
        <Link to='/' style={navItem}>HOME</Link>
        <Link to='/list' style={navItem}>Menu</Link>
        <Link to='/account' style={navItem}>Log in</Link>
        {/* <Link to='/new' style={navItem}>Add a New Keg</Link> */}
      </nav>
    </header>
  );
};

export default Header;