import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { ChevronLeft, ShoppingBag, ShieldCheck, Zap, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-8">
        <h1 className="font-pixel text-4xl uppercase">Loot Not Found</h1>
        <p className="text-gray-500">This item seems to have been vanished by a glitch.</p>
        <button onClick={() => navigate('/')} className="brutal-btn px-8">
          BACK TO WORLD MAP
        </button>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/" 
        className="inline-flex items-center text-xs font-pixel text-gray-500 hover:text-brand-pink mb-10 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO WORLD MAP
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Image Column */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-brand-pink border-4 border-black translate-x-4 translate-y-4 shadow-[8px_8px_0px_0px_#000]"></div>
          <div className="relative aspect-square border-8 border-black overflow-hidden bg-white">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-brand-yellow border-4 border-black p-4 font-pixel text-[10px] space-y-1 shadow-[4px_4px_0px_0px_#000]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-pink" />
              <span>RARITY: LEGENDARY</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-navy" />
              <span>WEIGHT: 0.5kg</span>
            </div>
          </div>
        </motion.div>

        {/* Product Info Column */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="bg-brand-mint border-2 border-black px-3 py-1 font-pixel text-[8px] uppercase tracking-widest shadow-[2px_2px_0px_0px_#000]">
                {product.category}
              </span>
              <span className="text-gray-400 font-pixel text-[8px]">ITEM NO: #{product.id}00234</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black italic uppercase italic leading-none">
              {product.name}
            </h1>
            <div className="flex items-center gap-6">
              <p className="font-pixel text-4xl text-brand-pink drop-shadow-[2px_2px_0px_#000]">
                ${product.price}
              </p>
              <button 
                onClick={() => useCartStore.getState().toggleWishlist(product.id)}
                className={cn(
                  "flex items-center gap-2 p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-pixel text-[10px]",
                  useCartStore(state => state.wishlist.includes(product.id)) ? "bg-brand-yellow" : "bg-white"
                )}
              >
                <Star className={cn("w-5 h-5", useCartStore(state => state.wishlist.includes(product.id)) && "fill-black")} />
                {useCartStore(state => state.wishlist.includes(product.id)) ? 'IN LOG' : 'ADD TO LOG'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 font-pixel text-xs border-b-4 border-black pb-2">
              <Info className="w-4 h-4" />
              LORE & DESCRIPTION
            </div>
            <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
              "{product.description} This legendary artifact was recovered from the deepest dungeons of the digital realm. It carries the marks of countless battles and the spirit of indie pioneers."
            </p>
          </div>

          {product.category === 'Apparel' && (
            <div className="space-y-4">
              <h4 className="font-pixel text-xs tracking-widest uppercase">Select Your Size</h4>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-14 h-14 border-4 border-black font-pixel text-sm transition-all shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none",
                      selectedSize === size 
                        ? "bg-brand-navy text-white -translate-x-1 -translate-y-1 shadow-[6px_6px_0px_0px_#000]" 
                        : "bg-white hover:bg-gray-100"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 space-y-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addItem(product)}
              className="w-full brutal-btn py-5 bg-brand-yellow text-black text-xl flex items-center justify-center gap-4"
            >
              <ShoppingBag className="w-6 h-6" />
              ADD TO INVENTORY
            </motion.button>
            <p className="text-center text-[10px] font-pixel text-gray-400 uppercase tracking-widest">
              Safe storage guaranteed in your inventory slot
            </p>
          </div>
        </motion.div>
      </div>

      {/* Retro Spec Section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-white border-8 border-black shadow-brutal">
        {[
          { title: "MATERIAL", value: "Legendary Fiber" },
          { title: "DURABILITY", value: "999/999" },
          { title: "BONUS", value: "+15 Charisma" }
        ].map(spec => (
          <div key={spec.title} className="text-center space-y-2 border-2 border-dashed border-gray-200 p-6">
            <span className="font-pixel text-[8px] text-gray-400 block">{spec.title}</span>
            <span className="font-pixel text-lg text-brand-navy">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
