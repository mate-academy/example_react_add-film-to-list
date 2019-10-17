import { createContext } from 'react';

export const ThemeContext = createContext(
  { theme: 'light', changeTheme: () => {} },
);

// const { Consumer, Provider } = ThemeContext;
