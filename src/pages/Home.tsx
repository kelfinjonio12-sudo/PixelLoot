import React from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Trophy, Zap, Gamepad2 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-brand-navy border-b-8 border-black">
        {/* Animated Background Items */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4"
          >
            <Trophy className="w-64 h-64 text-brand-yellow" />
          </motion.div>
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              x: [0, -80, 0],
              y: [0, 100, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4"
          >
            <Zap className="w-80 h-80 text-brand-pink" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-block bg-brand-mint text-brand-navy border-4 border-black px-4 py-1 font-pixel text-xs shadow-brutal"
            >
              LEVEL 1 COLLECTIBLES
            </motion.div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-extrabold text-white leading-none tracking-tighter"
            >
              LEVEL UP <br />
              <span className="text-brand-yellow">YOUR GEAR!</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-lg mb-8"
            >
              The ultimate destination for legendary indie game merchandise. Physical loot for virtual legends.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="brutal-btn text-lg py-4 px-10">
                START QUEST <ArrowRight className="ml-2 w-6 h-6" />
              </button>
              <button className="inline-flex items-center justify-center px-10 py-4 border-4 border-white text-white font-pixel text-xs hover:bg-white hover:text-brand-navy transition-all">
                VIEW COLLECTIONS
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 relative z-20">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-brand-pink" />
              <h2 className="font-pixel text-2xl uppercase tracking-tighter">New Arrivals</h2>
            </div>
            <p className="text-gray-500 font-medium">Fresh loot has just dropped into the inventory.</p>
          </div>
          <button className="hidden sm:flex items-center font-pixel text-xs text-brand-pink hover:translate-x-2 transition-transform">
            SEE ALL <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="bg-brand-yellow border-8 border-black p-12 shadow-brutal flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-black leading-none uppercase italic">Stay in the game!</h2>
            <p className="text-lg font-medium opacity-80">Get exclusive drops, early bird sales, and fresh loot alerts sent straight to your inbox.</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR@EMAIL.COM"
              className="flex-1 p-4 border-4 border-black font-pixel text-xs focus:bg-brand-mint outline-none transition-colors"
            />
            <button className="brutal-btn py-4 px-8 bg-brand-navy text-white hover:bg-brand-pink">
              JOIN UP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
