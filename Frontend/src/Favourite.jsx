import React from 'react'
import { useEffect,useState} from 'react'
import Favouritecard from './Favouritecard'
import axios from 'axios'

const Favourite = () => {
    let [list1, setlist1] = useState([])
    let [rule,setrule]=useState()

    
      const fetchData = async () => {
        try {
          const response = await axios.get("https://bookstore-website-backend.onrender.com/favourite2");
          setlist1(response.data);
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  useEffect(() => {

    fetchData();
  }, []);
   
  const ondelete=()=>{
    fetchData()
    
  }
  
  return (
    <>{list1.length>0?(<div className='flex flex-wrap gap-40 m-5 '>
        {list1.map((item) => {
          return <Favouritecard item={item} ondelete={ondelete}/>
        })}
      </div>):(<center className='font-bold text-4xl'>No favourites</center>)}</>
  )
}

export default Favourite