
import { MoveRight } from 'lucide-react';
import React from 'react'

const ProjectsPreview = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-5xl w-full '>
                <div className='flex w-full justify-between items-center'>
                    <span>// THINGS I'VE BUILT</span>
                    <button className='flex gap-2'>View all projects <MoveRight /></button>
                </div>
                <div className='border-t' />
                <div className='w-full'>
                    <div className='border p-4 bg-zinc-700'>
                        <span>WEB APP</span>
                        <h1>Scribbbly - Multiplayer Game</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, totam a sit aut ve</p>
                    </div>
                    <div className='border p-4 bg-zinc-700'>
                        <span>WEB APP</span>
                        <h1>Scribbbly - Multiplayer Game</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, totam a sit aut ve</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPreview