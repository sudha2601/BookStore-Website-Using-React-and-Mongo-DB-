import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Coursecard = ({ item }) => {
    let navigate = useNavigate()
    let [marked,setmarked]=useState(false)
    
    useEffect(()=>{
        
        const fetchdata=async()=>{

            const list2=await axios.post("https://bookstore-website-backend.onrender.com/favouritemarked",item)
            console.log(list2)
            if(list2.data=="Available"){
                setmarked(true)
    
            }
            else{
                setmarked(false)
            }
        }

        fetchdata()


    },[])
    const info=(item)=>{
        console.log(item)
        
        navigate("/book",{state:item})
    }
    
    
    const addfavourite= async(item)=>{
        const list1=await axios.post("https://bookstore-website-backend.onrender.com/favourite",item)
     
            setmarked(true)
        

    }


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={item.image}
                    alt="book" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p><span className='font-bold'>By </span>{item.author}</p>
                <div className="card-actions justify-end">
                    <button disabled={marked?true:false} className="btn btn-primary" onClick={()=>{
                        addfavourite(item)
                    }}>Mark as Favourites</button>

                </div>
                <div className='text-center '>More details</div>
                <button  className='flex items-center justify-center cursor-pointer pt-5'onClick={()=>{
                    info(item)
                }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></button>

            </div>
        </div>
    )
}

export default Coursecard