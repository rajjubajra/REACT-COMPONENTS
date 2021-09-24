import React from 'react';
import MenuBar from './MainMenu/MenuBar';
import MenuBar01 from './MainMenu01/MenuBar01';
import CompName from '../CompName';

function Navigation() {
  return (
    <div>
      <CompName name="Main-Menu" />
      <MenuBar />
      <CompName name="Main-Menu - One" />
      <MenuBar01 />
      
    </div>
  )
}

export default Navigation