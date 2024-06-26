import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from './cards'
import axios from 'axios'

const Home = () => {
  let [list1, setlist1] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/book");
        const list = response.data;
        console.log("Fetched list:", list);
        setlist1(list.slice(1, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    const navigate = useNavigate()
    return (
      <div className='container flex flex-col gap-5'>

        <div className='flex justify-around p-0 m-0'>
          <div className="hero bg-base-200 pt-5 m-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg"
                className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Free Books available!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary" onClick={() => {
                  navigate("/register")
                }}>Get Started</button>
              </div>
            </div>
          </div>


        </div>
        <div >
          <Cards item={list1} />
        </div>
      </div>
    )
  }

export default Home