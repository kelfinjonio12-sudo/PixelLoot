import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCartStore } from '../store/cartStore';
import { motion } from 'motion/react';
import { Scroll, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuestLog: React.FC = () => {
  const wishlist = useCartStore((state) => state.wishlist);
  const favoritedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="bg-brand-mint border-8 border-black p-8 shadow-brutal mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center -rotate-6 shadow-brutal">
            <Scroll className="w-10 h-10 text-brand-navy" />
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic italic leading-none drop-shadow-[2px_2px_0px_#fff]">
              Quest Log
            </h1>
            <p className="font-pixel text-[10px] text-gray-600 tracking-widest uppercase">
              Tracking legenday loot across the realm
            </p>
          </div>
        </div>
        <div className="bg-brand-navy text-brand-yellow border-4 border-black px-6 py-2 font-pixel text-xs shadow-[4px_4px_0px_0px_#000]">
          {favoritedProducts.length} QUESTS ACTIVE
        </div>
      </div>

      {favoritedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {favoritedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-24 text-center space-y-8 bg-white border-4 border-dashed border-gray-300 shadow-brutal"
        >
          <Compass className="w-24 h-24 mx-auto text-gray-200 animate-pulse" />
          <div className="space-y-4">
            <h2 className="font-pixel text-xl uppercase tracking-tighter">Your log is empty</h2>
            <p className="text-gray-500 max-w-sm mx-auto font-medium">
              You haven't tracked any items yet. Venture forth and discover legendary gear!
            </p>
          </div>
          <Link to="/" className="brutal-btn py-4 px-12">
            START ADVENTURE
          </Link>
        </motion.div>
      )}

      {/* Decorative Stats footer for page */}
      {favoritedProducts.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {['TRACKING', 'COMPLETION', 'RARITY SCORE', 'WORLD STATUS'].map((label, i) => (
            <div key={label} className="border-4 border-black bg-brand-navy p-4 font-pixel text-[8px] text-center text-white">
              <span className="opacity-50 block mb-1">{label}</span>
              <span className="text-brand-yellow text-sm">{i === 1 ? '12%' : i === 2 ? 'Lvl 4' : 'ONLINE' }</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
