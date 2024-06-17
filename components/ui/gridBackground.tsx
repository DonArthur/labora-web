import React from 'react'
import { TextGenerateEffect } from './textGenerateEffext';
import { HoverEffect } from './card-hover-effect';

interface IProject {
  title: string;
  description: string;
  link: string;
}

type Props = {
    text?: string;
    projects: IProject[]
}

const GridBackground = ({ text, projects }: Props) => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {text}
      </p> */}
      <div className='flex justify-center items-center flex-col mx-8'>
        <TextGenerateEffect
          className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'
          words={text || ''}
        />
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default GridBackground