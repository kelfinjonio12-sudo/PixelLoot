import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: string[]; // array of product IDs
  user: string | null;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      user: null,
      isOpen: false,
      addItem: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);
        if (existingItem) {
          return {
            items: state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            isOpen: true,
          };
        }
        return { items: [...state.items, { ...product, quantity: 1 }], isOpen: true };
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
        ).filter(item => item.quantity > 0),
      })),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      totalPrice: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      toggleWishlist: (productId) => set((state) => {
        const exists = state.wishlist.includes(productId);
        if (exists) {
          return { wishlist: state.wishlist.filter(id => id !== productId) };
        }
        return { wishlist: [...state.wishlist, productId] };
      }),
      isInWishlist: (productId) => get().wishlist.includes(productId),
      login: (username) => set({ user: username }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'pixel-loot-storage',
    }
  )
);
