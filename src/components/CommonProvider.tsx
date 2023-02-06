import CssBaseline from '@mui/material/CssBaseline';
import NextjsProgressbar from 'nextjs-progressbar';
import { type FC, type ReactNode } from 'react';
import ThemeColorProvider from '~/components/ThemeColorProvider';

const PRIMARY_MAIN_COLOR = process.env.NEXT_PUBLIC_PRIMARY_MAIN_COLOR;

type CommonProviderProps = Readonly<Partial<{
  children: ReactNode
}>>;

const CommonProvider: FC<CommonProviderProps> = ({ children }) => (
  <ThemeColorProvider>
    <CssBaseline />
    <NextjsProgressbar color={PRIMARY_MAIN_COLOR} />
    {children}
  </ThemeColorProvider>
);

export default CommonProvider;
export { type CommonProviderProps };
