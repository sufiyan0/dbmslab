import React from 'react'
import Image from 'next/image'
import { features } from './index'
import imgee from "../assets/logo.png"
const Items = () => {
    return (
        features.map((item) => (

            <div className="flex flex-wrap items-center justify-center max-w-[250px] bg-white  ">
                <div className="">

                    <div className="">

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