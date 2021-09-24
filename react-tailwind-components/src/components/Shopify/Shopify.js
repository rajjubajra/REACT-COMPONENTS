import React from 'react';
import Item from './Clothes/Item';
import ItemDetails from './Clothes/ItemDetails';
import CompName from '../CompName';

function Shopify() {
  return (
    <div className="w-full max-w-screen-xl m-auto p-10">
      <CompName name="Clothes" />
      <div className="flex flex-row flex-wrap">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div> 

      <CompName name="ItemDetails" />
      <div>
        <ItemDetails />
      </div>

      

    </div>
  )
}

export default Shopify
