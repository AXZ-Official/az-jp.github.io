import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { type FC } from 'react';
import Seo from '~/components/Seo';

const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

const Home: FC = () => (
  <>
    <Seo />
    <Stack spacing={4} paddingBottom='2rem'>
      <Typography color='text.secondary'>{SITE_DESCRIPTION}</Typography>
      <Box>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Typography variant='h5' component='h2'>AARRとは？</Typography>
            <Typography color='text.secondary'>
              AARR（Accurate And Revelatory Reporter）は、ボランティアによる洗練されたスキルやツールで、Discordのトラブルやネットいじめを正確に通報する団体です。
              <br />
              2021年に荒らし連合から派生しました。
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h5' component='h2'>実績</Typography>
            <Box
              component='ul'
              sx={{
                margin: 0,
                paddingInlineStart: '1rem'
              }}
            >
              {[
                '大手ショップのRShopを10日連続停止。',
                'GhostHaxなどの大規模荒らしサーバーの停止。',
                '悪意のあるサーバーを停止した数は数十件以上。'
              ].map(v => (
                <li key={v}><Typography color='text.secondary'>{v}</Typography></li>
              ))}
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Stack spacing={1}>
              <Box>
                <Typography variant='h5' component='h2'>コミュニティ</Typography>
                <Typography color='text.secondary'>
                  AARRはあなたの参加を待っています。
                  <br />
                  下記リンクのページからできます。
                </Typography>
              </Box>
              <Box>
                <NextLink passHref href='/community/discord/'>
                  <MuiLink
                    color='#a0d8ef'
                    fontSize='1.75rem'
                  >
                    Discord
                  </MuiLink>
                </NextLink>
              </Box>
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Stack spacing={2} alignItems='flex-start'>
              <Box>
                <Typography component='h2' variant='h6'>AARRのシンボルマーク</Typography>
                <Box
                  alt=''
                  component='img'
                  src='/images/logo-216x216.png'
                  width={216}
                  sx={{
                    marginTop: '1rem',
                    verticalAlign: 'middle'
                  }}
                />
              </Box>
              <NextLink href='/gallery/' passHref>
                <MuiLink
                  underline='hover'
                  color='#a0d8ef'
                >
                  他の画像も見る
                  <KeyboardArrowRightIcon
                    color='disabled'
                    sx={{ verticalAlign: 'bottom' }}
                  />
                </MuiLink>
              </NextLink>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  </>
);

export default Home;
