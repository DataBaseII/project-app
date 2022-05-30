import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function Navbar() {
  return (
    <Menu fluid tabular>
      <Menu.Item>
        <Link to="/home" className="font-link">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin-movies" className="font-link">Movies</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin-categories" className="font-link">Categories</Link>
      </Menu.Item>
    </Menu>
  )
}
