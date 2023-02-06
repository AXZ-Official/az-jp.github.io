import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { darken, lighten } from '@mui/material/styles';
import { type FC, type ReactNode } from 'react';

type LinkShareProps = Readonly<{
  href: string,
  onClick: (href: string) => void,
  children?: ReactNode
}>;

const LinkShare: FC<LinkShareProps> = ({ href, children, onClick }) => (
  <Box width='fit-content'>
    <Stack
      borderRadius='5px'
      height='3rem'
      width='fit-content'
      alignItems='center'
      direction='row'
      sx={{
        backgroundColor: theme => {
          const colorFunction = theme.palette.mode === 'dark' ? lighten : darken;

          return colorFunction(theme.palette.background.paper, 0.25);
        }
      }}
    >
      <Box
        marginX='0.25rem'
        padding='0.25rem'
        flex={1}
        minWidth='4rem'
        sx={{
          backgroundColor: theme => {
            const colorFunction = theme.palette.mode === 'dark' ? lighten : darken;

            return colorFunction(theme.palette.background.paper, 0.125);
          },
          borderBottomLeftRadius: '5px',
          borderTopLeftRadius: '5px'
        }}
      >
        {children}
      </Box>
      <Divider orientation='vertical' />
      <Tooltip title='リンクをコピー'>
        <IconButton
          onClick={() => onClick(href)}
          sx={{
            borderRadius: '0 5px 5px 0',
            height: '100%',
            width: '3rem'
          }}
        >
          <ContentCopyIcon fontSize='small' />
        </IconButton>
      </Tooltip>
    </Stack>
  </Box>
);

export default LinkShare;
export { type LinkShareProps };
