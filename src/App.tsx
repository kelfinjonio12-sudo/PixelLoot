import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { About } from './pages/About';
import { ProductDetail } from './pages/ProductDetail';
import { QuestLog } from './pages/QuestLog';
import { Login } from './pages/Login';
import { CartDrawer } from './components/CartDrawer';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/quest-log" element={<QuestLog />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="bg-brand-navy border-t-8 border-black py-12 text-white">
          <div className="max-w-7xl auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-6">
                <Link to="/" className="font-pixel text-2xl text-brand-yellow">PIXEL<span className="text-white">LOOT</span></Link>
                <p className="text-sm text-gray-400">Your favorite source for legendary indie game merchandise. Making loot real since 2012.</p>
              </div>
              <div className="space-y-6">
                <h4 className="font-pixel text-xs text-brand-pink uppercase tracking-widest">Inventory</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-medium">
                  <li className="hover:text-white cursor-pointer transition-colors">Best Sellers</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Collections</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Sale Room</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Gift Cards</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-pixel text-xs text-brand-mint uppercase tracking-widest">Mission Control</h4>
                <ul className="space-y-3 text-sm text-gray-400 font-medium">
                  <li><Link to="/about" className="hover:text-white transition-colors">About the Guild</Link></li>
                  <li className="hover:text-white cursor-pointer transition-colors">Shipping Intel</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Support Ticket</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Loot Tracking</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="font-pixel text-xs text-brand-yellow uppercase tracking-widest">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border-2 border-white hover:bg-brand-pink hover:border-black transition-all cursor-pointer"></div>
                  <div className="w-10 h-10 border-2 border-white hover:bg-brand-mint hover:border-black transition-all cursor-pointer"></div>
                  <div className="w-10 h-10 border-2 border-white hover:bg-brand-yellow hover:border-black transition-all cursor-pointer"></div>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-pixel text-gray-500">© 2026 PIXELLOOT - ALL RIGHTS RESERVED (PLAYER 1)</p>
              <div className="flex gap-8 font-pixel text-[8px] text-gray-500 uppercase tracking-widest">
                <span className="hover:text-white cursor-pointer">Privacy Protocol</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
        <CartDrawer />
      </div>
    </Router>
  );
};

export default App;
