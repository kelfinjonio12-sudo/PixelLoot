import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { ChevronLeft, Ghost } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12"
      >
        <Link 
          to="/" 
          className="inline-flex items-center text-xs font-pixel text-gray-500 hover:text-brand-pink mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO HOME
        </Link>
        
        <div className="bg-brand-pink border-8 border-black p-8 shadow-brutal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-pixel text-[10px] text-white opacity-80 tracking-[0.2em]">GEAR CATEGORY</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              {categoryName}
            </h1>
          </div>
          <div className="bg-white border-4 border-black px-4 py-2 font-pixel text-xs shadow-[4px_4px_0px_0px_#000]">
            {filteredProducts.length} ITEMS DETECTED
          </div>
        </div>
      </motion.div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center space-y-6 bg-white border-4 border-dashed border-gray-300 rounded-3xl">
          <Ghost className="w-20 h-20 mx-auto text-gray-200" />
          <h2 className="font-pixel text-lg text-gray-400">NO LOOT FOUND IN THIS SECTOR</h2>
          <Link to="/" className="brutal-btn">
            RETURN TO BASE
          </Link>
        </div>
      )}
    </div>
  );
};
