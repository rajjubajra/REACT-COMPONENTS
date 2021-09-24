import {useState, useEffect} from 'react';
import BtnReadMore from '../Buttons/BtnReadMore';
import ImageOnload from '../ImageOnload';
import {baseurl} from '../config';

function MusicList() {

  const [listdata, setListData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
      fetch(`${baseurl.URL}/data/musiclist.json`)
      .then( res => res.json())
      .then( data => setListData(data) )
      .catch( err => console.log(err));
  },[])

  useEffect(()=>{
    listdata.length > 0 && setFetched(true);
  },[listdata.length])

  return (
    <div className="p-10 grid grid-cols-12 grid-flow-row gap-4 font-extralight">
    {
      fetched && listdata.map( item => {
        return <div key={item.id} className="relative md:col-span-4 col-span-12">
        <div>
          <h3 className="lg:text-3xl md:text-xl text-2xl py-4">{item.title}</h3>
        </div>
        <div>
          <ImageOnload cssClass="w-full h-64 object-cover" src={item.image} />
        </div>
        <div className="py-4 mb-5">
          <div className="text-sm tracking-wide" dangerouslySetInnerHTML={{__html: item.body.substring(0,300)}} />
        </div>
        <div className="absolute bottom-0">
            <BtnReadMore link="#" />
        </div>
      </div>
      })
    }
    </div>
  )
}

export default MusicList
