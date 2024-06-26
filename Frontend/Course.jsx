import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'



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
        const response = await axios.get("http://localhost:3000/book");
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
    <><div className='flex justify-between items-center p-4'>
      <div className='flex-grow text-center'>
        <div className='font-bold italic text-4xl text-center text-slate-400'>Books available</div>
      </div>
    </div>
      <div className='relative'>
        <div className='sticky top-0 right-0 p-4'>
          <button className='p-2 bg-blue-500 text-white rounded z-30'>Favourites</button>
        </div>
      </div>
      <div className='flex flex-wrap gap-10 m-5 '>
        {list1.map((item) => {
          return <Card item={item} />
        })}
      </div></>
  )
}

export default Course