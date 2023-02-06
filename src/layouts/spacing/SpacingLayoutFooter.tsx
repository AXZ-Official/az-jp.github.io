import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { darken, lighten } from '@mui/material/styles';
import NextLink from 'next/link';
import { type FC } from 'react';
import Spacer from '~/components/Spacer';

const SpacingLayoutFooter: FC = () => (
  <Box
    sx={{
      backgroundColor: ({ palette: { mode, background } }) => {
        const xen = mode === 'light' ? darken : lighten;

        return xen(background.paper, 0.1);
      },
      bottom: 0,
      padding: '1rem',
      width: '100%'
    }}
  >
    <footer>
      <Spacer>
        <Stack direction='row' spacing={2}>
          <Typography fontSize='small' color='text.secondary'>© aarr-jp 2021</Typography>
          <NextLink
            passHref
            href='/legal/privacy-policy/'
          >
            <MuiLink
              underline='hover'
              color='#a0d8ef'
              fontSize='small'
            >
              プライバシーポリシー
            </MuiLink>
          </NextLink>
        </Stack>
      </Spacer>
    </footer>
  </Box>
);

export default SpacingLayoutFooter;
