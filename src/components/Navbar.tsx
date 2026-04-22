import React from 'react';
import { ShoppingCart, Menu, Search, Scroll, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { totalItems, toggleCart, wishlist, user, logout } = useCartStore();
  const itemCount = totalItems();
  const wishlistCount = wishlist.length;

  return (
    <nav className="sticky top-0 z-40 bg-brand-navy text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center group">
              <span className="font-pixel text-2xl tracking-tighter text-brand-yellow group-hover:text-brand-pink transition-colors">
                PIXEL<span className="text-white">LOOT</span>
              </span>
            </Link>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {['Apparel', 'Plush', 'Vinyl', 'Pins'].map((item) => (
                  <Link
                    key={item}
                    to={`/category/${item.toLowerCase()}`}
                    className="font-pixel text-[10px] uppercase tracking-widest hover:text-brand-mint transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  to="#"
                  className="font-pixel text-[10px] uppercase tracking-widest text-brand-pink hover:text-brand-yellow transition-colors"
                >
                  Sale
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-4 border-r-2 border-white/10 pr-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-mint p-1">
                    <div className="w-full h-full bg-brand-mint/20 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-pixel text-brand-mint uppercase tracking-tighter">LVL 1 HUMAN</span>
                    <span className="text-[10px] font-pixel text-white uppercase truncate max-w-[100px]">{user}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="text-[8px] font-pixel text-brand-pink hover:text-white transition-colors ml-2 uppercase"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="flex items-center gap-2 font-pixel text-[10px] text-brand-yellow hover:text-brand-pink transition-colors uppercase tracking-widest"
                >
                  <User className="w-4 h-4" />
                  Enter Game
                </Link>
              )}
            </div>

            <button className="p-2 hover:bg-white/10 transition-colors hidden sm:block">
              <Search className="w-6 h-6" />
            </button>
            <Link 
              to="/quest-log"
              className="relative p-2 bg-brand-mint border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-brand-navy"
            >
              <Scroll className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-black font-pixel text-[8px] min-w-[20px] h-5 flex items-center justify-center border-2 border-black px-1">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleCart}
              className="relative p-2 bg-brand-pink border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-black font-pixel text-[8px] min-w-[20px] h-5 flex items-center justify-center border-2 border-black px-1">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
