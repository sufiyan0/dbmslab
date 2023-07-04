import React from 'react'
import Image from 'next/image'
import { features } from './index'
import imgee from "../assets/logo.png"
const Items = () => {
    return (
        features.map((item) => (


            <div className="flex  flex-wrap items-center justify-center max-w-[250px] bg-gray-600  ">
                <div className="">

                    <div className="absolute p-2 border-1 border-black h-10 w-24">

                        <Image src={imgee} alt="prodect" />
                    </div>
                    <div className="">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h4>{item.price}</h4>
                    </div>
                </div>
            </div>
        ))
    )
}

export default Items