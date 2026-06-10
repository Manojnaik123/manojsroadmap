import { MoveDown } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full  flex justify-center'>
            <div className='max-w-5xl w-full p-6 flex flex-col'>

                <span>// AVALIABLE FOR WORK</span>
                <h1 className='text-3xl pt-2'>Hi, I'm Manoj </h1>

                <span className='text-[14px] pt-2 md:text-[15px] text-zinc-500'>frontend | backend</span>

                <p className='text-zinc-500 pt-4 text-[13px] md:text-[14px]'>Lorem, ipsum dolor sit amet excepturi tenetur error eaque provident omnis magnam ex amet consequuntur aliquam exercitationem officiis doloribus, cum, fugit voluptatem quibusdam expedita molestias?</p>
                <p className='pt-6 text-[14px] md:text-[16px] text-zinc-300' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, consequatur excepturi tenetur error eaque provident omnis magnam ex amet consequuntur aliquam exercitationem officiis doloribus, cum, fugit voluptatem quibusdam expedita molestias?</p>
                <div className='mt-6'>
                    <button className='px-4 py-2 border flex'> read more about me <MoveDown/></button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection