import { create } from "zustand";

// Define the store
export const useRestaurantStore = create((set) => ({
  restaurant: "null",
  setRestaurant: (name) => set((state) => ({ restaurant: name })),
}));

export const useCartStore = create((set) => ({
  items: [],
  total: 0,
  addToCart: (cartItem) =>
    set((state) => ({
      items: [...state.items, cartItem],
    })),
  removeFromCart: (cartItem) =>
    set((state) => {
      const newCart = [...state.items];
      const itemIndex = state.items.findIndex((item) => item.id == cartItem.id);

      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("can't remove");
      }

      return { items: newCart };
    }),
  emptyCart: () =>
    set({
      items: [],
    }),
}));
