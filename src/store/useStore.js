import axios from "axios";
import { create } from "zustand";

// axios instansiyasini yaratish
const api = axios.create({
  baseURL: "http://165.22.111.4"
});

const useStore = create((set) => ({
  productOne: [],
  productTwo: [],
  newsS: [],
  selectedProduct: null,
  loading: false,
  error: null,

  setSelectedProduct: (id, type) => set({ selectedProduct: { id, type } }),

  fetchProductDetails: async (id, type) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/${type}/details/${id}`);
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
