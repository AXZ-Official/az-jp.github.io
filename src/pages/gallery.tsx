import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { type FC } from 'react';
import ImgurImageShowcase from '~/components/ImgurImageShowcase';
import Seo from '~/components/Seo';

const GalleryPage: FC = () => (
  <>
    <Seo
      title='ギャラリー'
      description='コミュニティの画像などを置いています。'
    />
    <Stack spacing={2} paddingBottom='2rem'>
      <Divider />
      <Typography component='h2' fontSize='1.75rem'>ギャラリー</Typography>
      <Typography fontSize='small' color='text.secondary'>
        画像をクリック（またはタップ）でオリジナルサイズの画像を開けます。
        <br />
        一部の画像はデバイスによっては重くなる可能性があります。
      </Typography>
      <Stack spacing={4}>
        <ImgurImageShowcase
          title='AARRのDiscordサーバーアイコン'
          images={[
            {
              ext: '.png',
              imgurId: 'Uprp9eZ',
              message: '2022年10月9日～'
            },
            {
              deviceWarning: true,
              ext: '.gif',
              imgurId: '45f4YDN',
              message: '2021年12月4日～'
            }
          ]}
        />
        <ImgurImageShowcase
          title='AARRのDiscordサーバーバナー'
          images={[
            {
              deviceWarning: true,
              ext: '.gif',
              imgurId: 'k9FnwHw',
              message: '2021年12月5日～'
            }
          ]}
        />
      </Stack>
    </Stack>
  </>
);

export default GalleryPage;
