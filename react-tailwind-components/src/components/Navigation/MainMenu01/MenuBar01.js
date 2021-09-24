import React, {useState, useEffect} from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import {baseurl} from '../../config';

function MenuBar01() {


     //const [menudata, setMenuData] = useState([]);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [menudata, setMenudata] = useState([]);

    /** SHOW OR HIDE MOBILE MENU */
    function showHideNav(){
      return mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    useEffect(()=>{

      fetch(`${baseurl.URL}/data/mainmenu.json`)
      .then(res => res.json())
      .then(data => setMenudata(data))
      .catch(err => console.log(err))

    },[])


      const menu = ["Music", "About", "Contact"];
    
  return (
    <div className="w-full py-3 bg-gray-100">
      
      <div className="md:hidden block">
        <Mobile menudata={menudata} length={menudata.length} menu={menu} />
      </div>

      <div className="hidden md:block">
        <Desktop menudata={menudata} length={menudata.length} menu={menu} />
      </div>
      
    </div>
  )
}

export default MenuBar01
