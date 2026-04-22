import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product, useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, toggleWishlist, wishlist } = useCartStore();
  const isFavorited = wishlist.includes(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="brutal-card group flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-square border-b-4 border-black">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-brand-pink text-white font-pixel text-[8px] px-2 py-1 border-2 border-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000]">
            {product.category}
          </span>
        </div>
        <button 
          onClick={() => toggleWishlist(product.id)}
          className={cn(
            "absolute top-4 right-4 p-2 border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none",
            isFavorited ? "bg-brand-yellow" : "bg-white"
          )}
        >
          <Star className={cn("w-4 h-4", isFavorited && "fill-black")} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-lg leading-tight hover:text-brand-pink transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4">
          <span className="font-pixel text-xl">${product.price}</span>
          <button 
            onClick={() => addItem(product)}
            className="brutal-btn p-2"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            ADD
          </button>
        </div>
      </div>
    </motion.div>
  );
};
