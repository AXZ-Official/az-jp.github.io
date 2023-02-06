import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { type FC } from 'react';
import Seo from '~/components/Seo';

const SmallOpenInNewIcon = styled(OpenInNewIcon)({
  verticalAlign: 'middle',
  width: '1.25rem'
});

const PrivacyPolicyPage: FC = () => (
  <>
    <Seo
      title='プライバシーポリシー'
      description='プライバシーポリシー'
    />
    <Box sx={{ marginBottom: '5rem' }}>
      <Stack spacing={2}>
        <Typography component='h1' variant='h4' sx={{ margin: '1rem 0' }}>プライバシーポリシー</Typography>
        <Typography component='h2' variant='h5'>アクセス解析について</Typography>
        <Typography>
          当サイトでは、アクセス解析サービス「Googleアナリティクス」を使用しています。<br />
          このGoogleアナリティクスはデータの収集のためにCookieを使用しています。<br />
          このデータは匿名で収集されており、個人を特定するものではありません。
        </Typography>
        <Typography>
          この機能はCookieを無効にすることで拒否することができますので、お使いのブラウザの設定をご確認ください。<br />
          この規約に関しての詳細は
          <NextLink
            passHref
            href='https://marketingplatform.google.com/about/analytics/terms/jp/'
          >
            <MuiLink
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'
              color='#a0d8ef'
            >
              Google アナリティクス利用規約
              <SmallOpenInNewIcon />
            </MuiLink>
          </NextLink>
          のページや
          <NextLink
            passHref
            href='https://policies.google.com/technologies/ads?hl=ja'
          >
            <MuiLink
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'
              color='#a0d8ef'
            >
              Googleポリシーと規約
              <SmallOpenInNewIcon />
            </MuiLink>
          </NextLink>
          のページをご覧ください。
        </Typography>
        <Typography color='text.secondary'>制定・施行：2022年11月5日</Typography>
      </Stack>
    </Box>
  </>
);

export default PrivacyPolicyPage;
