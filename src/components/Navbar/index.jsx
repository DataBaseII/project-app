import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function Navbar() {
  return (
    <Menu fluid tabular>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin-movies">Movies</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin-categories">Categories</Link>
      </Menu.Item>
    </Menu>
  )
}
