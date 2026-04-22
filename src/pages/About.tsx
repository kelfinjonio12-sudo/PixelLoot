import React from 'react';
import { motion } from 'motion/react';
import { Sword, Shield, Wand2, Map, Users, Star } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kaelen Swift',
    class: 'Level 99 Code Mage',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop',
    bio: 'Cast master-level spells in React and Tailwind. Can refactor a legacy codebase in a single turn.'
  },
  {
    name: 'Elara Moon',
    class: 'Paladin of Design',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    bio: 'Defends the guild against ugly UI and bad UX. Her holy shield blocks all generic templates.'
  },
  {
    name: 'Jax Ironheart',
    class: 'Chief Loot Inspector',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Inspects every plushie and pin with barbarian-level intensity. Only the legendary loot survives.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="bg-brand-navy text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b-8 border-black bg-gradient-to-br from-brand-navy to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-brand-yellow border-4 border-black mx-auto mb-8 flex items-center justify-center rotate-12 shadow-brutal"
          >
            <Map className="w-12 h-12 text-black" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4"
          >
            Mission <span className="text-brand-pink">Control</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-pixel text-xs text-brand-mint tracking-[0.3em] uppercase"
          >
            Establishing real-world loot points since 2024
          </motion.p>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Users className="w-64 h-64" />
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brutal-card p-8 md:p-12 bg-white text-brand-navy"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-pink border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
              <Sword className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black uppercase italic">The Origin Quest</h2>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed font-medium">
            <p>
              PixelLoot was founded by a party of veteran adventurers who grew tired of legendary items disappearing the moment they logged out. In 2024, our guild set out on a new quest: <span className="bg-brand-yellow px-1 font-bold">to bridge the gap between digital glory and physical reality.</span>
            </p>
            <p>
              We believe that the stories told in indie and classic games deserve to be held in your hands. Whether it's a plushie companion to guard your desk or a vinyl soundtrack to set the mood for your next raid, every piece of loot we forge is crafted with the same passion that game developers put into their worlds.
            </p>
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-brand-mint flex items-center justify-center font-pixel text-xs">
                    P{i}
                  </div>
                ))}
              </div>
              <p className="text-sm font-pixel text-gray-500 uppercase tracking-widest">Guild Party: Full</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Guild Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t-8 border-black bg-brand-mint text-brand-navy">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-black uppercase italic tracking-tight">Meet the Guild</h2>
          <p className="font-pixel text-[10px] text-gray-600 tracking-widest uppercase">The High-Level Heroes Behind the Loot</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="brutal-card bg-white p-6 flex flex-col items-center text-center space-y-4"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-pink border-4 border-black translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 object-cover border-4 border-black grayscale hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-black uppercase italic">{member.name}</h3>
                <span className="inline-block bg-brand-navy text-brand-yellow font-pixel text-[8px] px-3 py-1 border-2 border-black mt-2">
                  {member.class}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 leading-snug">
                {member.bio}
              </p>
              <div className="flex gap-4 pt-4 border-t-2 border-black/5 w-full justify-center">
                <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-brand-pink py-16 border-t-8 border-black text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase px-4">
          Ready to join the party?
        </h2>
        <div className="flex justify-center gap-6 px-4 flex-wrap">
          <button className="brutal-btn py-4 px-12 bg-brand-yellow text-black">
            VIEW THE LOOT
          </button>
          <button className="brutal-btn py-4 px-12 bg-white text-brand-navy">
            JOIN THE GUILD
          </button>
        </div>
      </section>
    </div>
  );
};
