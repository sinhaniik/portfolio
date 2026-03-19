import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeOrigin = 'light' | 'dark';

const getInitialTheme = (): ThemeOrigin => {
  const saved = localStorage.getItem('theme');
  return (saved === 'dark' || saved === 'light') ? saved : 'light';
};

interface ThemeState {
  mode: ThemeOrigin;
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
    setTheme(state, action: PayloadAction<ThemeOrigin>) {
      state.mode = action.payload;
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
