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
            <Typography variant='h5' component='h2'>Azとは？</Typography>
            <Typography color='text.secondary'>
              Azは、病んでる人の居場所です。
              <br />
              2023年に誕生しました。
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h5' component='h2'>鯖主のDiscordサーバー凍結実績</Typography>
            <Box
              component='ul'
              sx={{
                margin: 0,
                paddingInlineStart: '1rem'
              }}
            >
              {[
                '第五人格の公式サーバーの凍結',
                'GhostHaxや2b2t.jpなどの大規模荒らしサーバーの凍結',
                '他にもまだまだ実績はありますが、書ききれないのでこの辺で。'
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
                  Azはあなたの参加を待っています。
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
                <Typography component='h2' variant='h6'>Azのシンボルマーク</Typography>
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
