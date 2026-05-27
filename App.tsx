/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import myVideo from './assets/video.mp4';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative h-[100dvh] w-screen bg-[#0a0a0a] overflow-hidden select-none">
      {/* Background Video with slow zoom-in entrance */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.8, scale: 1.05 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/cinematic_portrait_bg_1779799111503.png"
          className="w-full h-full object-cover"
        >
          <source src={myVideo} type="video/mp4" />
        </video>
      </motion.div>
      {/* Vignette / Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/90 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full text-[#ebe5da] p-8 md:p-12 font-serif flex flex-col justify-between">
        
        {/* Top Left Title */}
        <div className="uppercase leading-none tracking-[0.1em] text-white">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-[4rem] font-medium mb-4 drop-shadow-xl"
          >
            Yousuf
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-[4rem] font-medium drop-shadow-xl text-[#d8d1c6]"
          >
            Unbound
          </motion.h2>
        </div>

        {/* Center Button Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group/btn z-20"
        >
          {/* Pulsing subtle glow behind the button */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-[250px] md:w-[300px] h-[120px] md:h-[150px] bg-pink-500/20 blur-[40px] md:blur-[50px] rounded-[100px] mix-blend-screen pointer-events-none transition-all duration-700 group-hover/btn:bg-pink-400/40" 
          />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-12 md:px-16 py-3 md:py-4 rounded-full border border-white/20 backdrop-blur-md bg-black/20 uppercase tracking-[0.2em] md:tracking-[0.3em] font-sans text-sm md:text-base font-light text-[#ebe5da] transition-all duration-500 hover:text-white hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] focus:outline-none"
          >
            {/* Shimmer sweep effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg]"
            />
            
            <span className="relative z-10 drop-shadow-md">Explore</span>
          </motion.button>
        </motion.div>

        {/* Vertical Text - Left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          style={{ transform: 'translate(-50%, -50%) rotate(-90deg)', top: '50%', left: '3rem', position: 'absolute', whiteSpace: 'nowrap' }}
          className="hidden md:block pointer-events-none"
        >
          <p className="uppercase tracking-[0.4em] font-sans text-xs font-light text-[#d8d1c6] opacity-70">
            Crafting Chaos In The Shadows
          </p>
        </motion.div>

        {/* Vertical Text - Right */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
          style={{ transform: 'translate(50%, -50%) rotate(90deg)', top: '50%', right: '3rem', position: 'absolute', whiteSpace: 'nowrap' }}
          className="hidden md:block pointer-events-none"
        >
          <p className="uppercase tracking-[0.4em] font-sans text-xs font-light text-[#d8d1c6] opacity-70">
            Beyond The Human Imagination
          </p>
        </motion.div>

        {/* Bottom Center Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none"
        >
          <p className="uppercase tracking-[0.25em] font-sans text-xs md:text-sm font-light opacity-80 drop-shadow-md px-4">
            Where Reality Fades, The Unbound Begins
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}

