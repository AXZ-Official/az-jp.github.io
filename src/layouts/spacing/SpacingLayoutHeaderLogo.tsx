import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import { type FC } from 'react';

const SpacingLayoutHeaderLogo: FC = () => {
  const { palette } = useTheme();

  return (
    <Box width='fit-content'>
      <NextLink href='/' passHref>
        <MuiLink
          aria-label='ホームに戻る'
          underline='none'
          sx={{ display: 'flex' }}
        >
          <Typography
            variant='h3'
            component='h1'
            color={palette.text.primary}
          >
            AARR
          </Typography>
        </MuiLink>
      </NextLink>
    </Box>
  );
};

export default SpacingLayoutHeaderLogo;
