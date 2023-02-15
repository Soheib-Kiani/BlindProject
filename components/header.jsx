"use client"
import React from 'react'
import { BiMenu } from 'react-icons/bi'
const Header = () => {
    return (
        <div className='flex justify-between w-full py-4 px-2 border-b-2 border-gray-400'>
            <div className='text-2xl'>
                <BiMenu className="font-semibold"></BiMenu>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header