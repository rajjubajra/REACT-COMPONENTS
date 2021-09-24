import React from 'react';
import Colours from './Colours';
import ImageOnload from '../../ImageOnload';

function Item() {
  return (
    <div className="p-5">
      <div className="border border-gray-300 w-80 h-98 p-3">
          <ImageOnload 
        cssClass="w-80 h-96 object-cover"
        src="/images/t-shirts.jpg"
        alt="T-Shirt"
        />
        <p className="font-extralight tracking-wide">Cotton Short Sleev</p>
        <p className="font-sm">£ 35.00</p>
        <p className="text-xs font-extralight">Availble colours</p>
        <Colours />
      </div>  
    </div>
  )
}

export default Item
