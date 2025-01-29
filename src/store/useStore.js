import axios from "axios";
import { create } from "zustand";

// axios instansiyasini yaratish
const api = axios.create({
  baseURL: "http://165.22.111.4" // Bazaviy URL
});

const useStore = create((set) => ({
  productOne: [],
  productTwo: [],
  newsS: [],
  selectedProduct: null, // Tanlangan mahsulotni saqlash
  loading: false,
  error: null,

  // API so'rovlari

  // ✅ Mahsulotni ID orqali tanlab olish
  setSelectedProduct: (id, type) => set({ selectedProduct: { id, type } }),

  // ✅ ProductOne uchun batafsil ma’lumot olish
  fetchProductOneDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/ProductOne/details/${id}`);
      set({ selectedProduct: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // ✅ ProductTwo uchun batafsil ma’lumot olish
  fetchProductTwoDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/ProductTwo/details/${id}`);
      set({ selectedProduct: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchProductOne: async () => {
    set({
      loading: true,
      error: null
    });
    try {
      const response = await api.get("/ProductOne");
      set({ productOne: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchProductTwo: async () => {
    set({
      loading: true,
      error: null
    });
    try {
      const response = await api.get("/ProductTwo");
      set({ productTwo: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchNewsS: async () => {
    set({
      loading: true,
      error: null
    });
    try {
      const response = await api.get("/New");
      set({ newsS: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useStore;
