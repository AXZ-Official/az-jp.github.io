import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { forwardRef } from 'react';
import Spacer from '~/components/Spacer';
import SpacingLayoutHeaderLogo from '~/layouts/spacing/SpacingLayoutHeaderLogo';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
const SpacingLayoutHeader = forwardRef<HTMLDivElement>(function SpacingLayoutHeader(_props, ref) {
  return (
    <AppBar
      ref={ref}
      elevation={0}
      sx={{ backgroundColor: 'background.paper' }}
    >
      <Toolbar disableGutters>
        <Spacer>
          <SpacingLayoutHeaderLogo />
        </Spacer>
      </Toolbar>
    </AppBar>
  );
});

export default SpacingLayoutHeader;
