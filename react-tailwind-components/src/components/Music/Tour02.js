import React,{useEffect, useState} from 'react';
import {baseurl} from '../config';
import TourList02 from './TourList02';
import TourDetail02 from './TourDetail02';



function Tour02() {

  const [tourdata, setTourdata] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [event, setEvent] = useState(0);
  
  
  useEffect(()=>{
    fetch(`${baseurl.URL}/data/tour.json`)
    .then(res => res.json())
    .then( data => setTourdata(data))
    .catch(err => console.log(err));
  },[])

  useEffect(() => {
    tourdata.length > 0 && setFetched(true);
  },[tourdata.length])


  function view(index){
    setEvent(index);
  }





  return (
    <div className="w-full max-w-screen-xl m-auto p-10 relative
    grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2">

     {/** TOUR LIST */}
      <div>
        <h2 className="text-3xl">Tour</h2>
        {
          fetched &&
          tourdata.map((item, index) => {
            return <TourList02
                id={item.id}
                date={item.date}
                title={item.event_title}
                venue={item.venue}
                view={view(index)}
              />
          })
        }
      </div>

       {/** TOUR DETAILS */}
      <div>
        {fetched &&
          <TourDetail02 
            event_title={tourdata[event].event_title}
            date={tourdata[event].date}
            venue={tourdata[event].venue}
            body={tourdata[event].details}
          />
        }
      </div>
      
    </div>
  )
}

export default Tour02