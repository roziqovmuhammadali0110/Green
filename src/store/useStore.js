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
  loading: false,
  error: null,

  // API so'rovlari
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

  // Agar kerak bo'lsa ProductDetails uchun metod
  // fetchProductDetails: async () => {
  //   set({ loading: true, error: null });
  //   try {
  //     const response = await axios.get("/ProductDetails");
  //     set({ productDetails: response.data, loading: false });
  //   } catch (error) {
  //     set({ error: error.message, loading: false });
  //   }
  // },
}));

export default useStore;
