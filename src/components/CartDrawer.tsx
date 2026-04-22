import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trophy, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, totalPrice, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate processing
    setTimeout(() => {
      setIsCheckingOut(false);
      setShowSuccess(true);
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    toggleCart();
    // Reset success state after drawer closes
    setTimeout(() => setShowSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l-8 border-black z-50 flex flex-col"
          >
            <div className="p-6 border-b-4 border-black flex items-center justify-between bg-brand-yellow">
              <h2 className="font-pixel text-lg">YOUR LOOT</h2>
              <button 
                onClick={handleClose}
                className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                disabled={isCheckingOut}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {showSuccess ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-brand-mint border-4 border-black flex items-center justify-center rotate-12 shadow-brutal animate-bounce">
                    <Trophy className="w-12 h-12 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-pixel text-xl uppercase italic">QUEST COMPLETED!</h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                      Your loot is being packed and prepared for teleportation.
                    </p>
                  </div>
                  <button 
                    onClick={handleClose}
                    className="brutal-btn"
                  >
                    CONTINUE ADVENTURE <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="font-pixel text-xs text-gray-500 uppercase tracking-widest">
                    Your cart is empty explorer!
                  </p>
                  <button 
                    onClick={handleClose}
                    className="brutal-btn"
                  >
                    GO FIND LOOT
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover border-2 border-black"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-brand-pink"
                          disabled={isCheckingOut}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-pixel text-[10px] text-gray-500">${item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border-2 border-black">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 disabled:opacity-50"
                            disabled={isCheckingOut}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 font-pixel text-xs border-x-2 border-black min-w-[32px] text-center">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 disabled:opacity-50"
                            disabled={isCheckingOut}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-bold ml-auto">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && !showSuccess && (
              <div className="p-6 border-t-8 border-black bg-brand-mint space-y-4">
                <div className="flex justify-between items-center font-pixel">
                  <span>TOTAL LOOT</span>
                  <span className="text-xl">${totalPrice()}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 border-4 border-black bg-brand-navy text-white font-pixel hover:bg-brand-pink disabled:bg-gray-400 transition-colors shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent"
                      />
                      PROCESSING...
                    </>
                  ) : (
                    'SECURE CHECKOUT'
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
