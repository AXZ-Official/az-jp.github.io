import { ThemeProvider, createTheme } from '@mui/material/styles';
import { type FC, type ReactNode } from 'react';

const PRIMARY_MAIN_COLOR = process.env.NEXT_PUBLIC_PRIMARY_MAIN_COLOR;

type ThemeColorProviderProps = Readonly<Partial<{
  children: ReactNode
}>>;

const ThemeColorProvider: FC<ThemeColorProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: PRIMARY_MAIN_COLOR
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeColorProvider;
export { type ThemeColorProviderProps };
