import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    theme: "light",
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, toggleTheme } = appSlice.actions;
