"use client";
import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from 'framer-motion'
import GridBackground from './ui/gridBackground';

const Hero = () => {
    const projects = [{
        title: "Stripe",
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
      },
      {
        title: "Netflix",
        description:
          "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
      }]
  return (
    <div className='pb-20 pt-36'>
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Welcome <br /> to <br /> Labora's Portfolio
                </motion.h1>
            </LampContainer>
            <GridBackground text='Where Great Things Happen' projects={projects} />
        </div>
    </div>
  )
}

export default Hero