import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import CityScene from '../three/CityScene';
import EmailForm from '../ui/EmailForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Background 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [10, 10, 10], fov: 45 }}
          className="h-full w-full bg-gradient-to-b from-primary/10 to-secondary/10"
        >
          <Suspense fallback={null}>
            <CityScene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 [text-wrap:balance] leading-tight">
                Own a Piece of Digital Assets Portfolio
              </h1>
              <p className="text-lg text-neutral-700 mb-8">
                Join MetaEstateDAO to invest in and manage virtual assets through
                collective ownership and decentralized governance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full">
  <div className="flex-1">
    <EmailForm />
  </div>
  
  <motion.a
  href="https://discord.gg/X22bWX7Czq"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="h-12 px-8 text-base font-medium rounded-lg text-white bg-[#4F7EF7] hover:bg-[#4F7EF7]/90 transition-colors flex items-center justify-center min-w-[160px] whitespace-nowrap"
>
  Join Discord
</motion.a>
</div>
            </motion.div>

            {/* Right Content (Empty for now, maintains grid layout) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}