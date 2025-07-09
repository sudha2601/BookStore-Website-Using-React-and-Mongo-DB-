import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Book = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const data = location.state

    return (
        <div className='bg-slate-200 h-screen'>
            <div className='flex flex-col items-center justify-center p-5 gap-5'>
                <img src={data.image} alt="" />
                <div className='font-bold text-2xl'>{data.author}</div>
                <div className='text-xl italic'>{data.description}</div>
                <button className='text-xl border-2 rounded-lg bord border-black p-2 bg-green-400' onClick={() => {
                    navigate("/register")

                }}>Free</button>


            </div>

        </div>
    )
}

export default Book