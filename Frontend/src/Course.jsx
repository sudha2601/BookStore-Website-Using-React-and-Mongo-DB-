import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coursecard from './coursecard'



const Course = () => {
  let navigate = useNavigate()
  let [list1, setlist1] = useState([])

  useEffect(() => {
    let auth = localStorage.getItem("User")
    if (!auth) {
      navigate("/")
    }



    const fetchData = async () => {
      try {
        const response = await axios.get("https://bookstore-website-backend.onrender.com/book");
        const list = response.data;
        console.log("Fetched list:", list);
        setlist1(list);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <>  <div className='flex justify-between items-center p-4'>
      <div className='flex-grow text-center'>
        <div className='font-bold italic text-4xl text-center text-slate-400'>Books available</div>
      </div>
    </div>
      <div className='relative'>
        <div className='p-4 flex justify-end fixed top-0 right-0 z-50'>
          <button className='p-2 bg-blue-500 text-white rounded' onClick={()=>{
            navigate("/favourite")
          }}>Favourites</button>
        </div>
      </div>
      <div className='flex flex-wrap  gap-40 '>
        {list1.map((item) => {
          return <Coursecard item={item} />
        })}
      </div></>
  )
}

export default Course