import Image from 'next/image'
import React from 'react'

export default function Loading() {
    return (
        <div className=' h-screen  flex items-center justify-center  bg-slate-400'>
            <div className="  bg-red-500">
                <Image src="/icon1.png"  alt="logo"  width={150} height={150} />

            </div>
        </div>
    )
}
