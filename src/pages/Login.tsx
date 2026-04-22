import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCartStore } from '../store/cartStore';
import { Gamepad2, Key, User, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const login = useCartStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate loading/login
    setTimeout(() => {
      login('Player One');
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-brand-navy border-8 border-black shadow-brutal p-8 md:p-12 space-y-8"
      >
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-brand-yellow border-4 border-black mx-auto mb-6 flex items-center justify-center -rotate-6 shadow-[4px_4px_0px_0px_#000]">
            <Gamepad2 className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">PLAYER LOGIN</h1>
          <p className="font-pixel text-[10px] text-brand-mint uppercase tracking-widest">Insert credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-pixel text-[8px] text-white uppercase tracking-widest block pl-1">Player ID (Email)</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="PRO_GAMER@LOOT.COM"
                className="w-full bg-white border-4 border-black p-4 pl-12 font-pixel text-[10px] outline-none focus:bg-brand-mint transition-colors"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-pixel text-[8px] text-white uppercase tracking-widest block pl-1">Secret Password</label>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full bg-white border-4 border-black p-4 pl-12 font-pixel text-[10px] outline-none focus:bg-brand-mint transition-colors"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full brutal-btn py-5 bg-brand-yellow text-black text-xl flex items-center justify-center gap-3 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {isSubmitting ? 'CONNECTING...' : (
              <>
                ENTER GAME <ArrowRight className="w-6 h-6" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-4 border-t-4 border-black/20">
          <button className="font-pixel text-[8px] text-gray-400 hover:text-brand-pink underline tracking-widest uppercase transition-colors">
            Create New Character
          </button>
        </div>

        {/* Decorative Arcade HUD elements */}
        <div className="flex justify-between font-pixel text-[8px] text-brand-pink/50 pt-4 uppercase tracking-tighter">
          <span>CREDITS: 99</span>
          <span className="animate-pulse">PRESS START</span>
          <span>HIGH SCORE: 00000</span>
        </div>
      </motion.div>
    </div>
  );
};
