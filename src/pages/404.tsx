import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type FC } from 'react';
import Seo from '~/components/Seo';

const NotFoundPage: FC = () => (
  <>
    <Seo
      title='ページが見つかりません'
      description='ページが見つかりません'
    />
    <Stack spacing={2} paddingBottom='2rem'>
      <Divider />
      <Typography component='h2' variant='h5'>ページが見つかりません</Typography>
    </Stack>
  </>
);

export default NotFoundPage;
