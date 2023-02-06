import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { type FC, useState } from 'react';
import LinkShare from '~/components/LinkShare';
import Seo from '~/components/Seo';
import { useDiscordInvite } from '~/hooks/useDiscordInvite';

const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE;

const DiscordPage: FC = () => {
  const [discordInviteCopyStatus, setDiscordInviteCopyStatus] = useState<'error' | 'success'>();
  const discordInvite = useDiscordInvite();

  return (
    <>
      <Seo
        title='Discordコミュニティ'
        description='AzのDiscordに参加しよう。'
      />
      <Snackbar
        onClose={() => setDiscordInviteCopyStatus(undefined)}
        open={typeof discordInviteCopyStatus !== 'undefined'}
        autoHideDuration={2000}
      >
        <Alert
          variant='filled'
          sx={{ width: '100%' }}
          severity={discordInviteCopyStatus}
        >
          {discordInviteCopyStatus === 'success' && '招待リンクをコピーしました'}
          {discordInviteCopyStatus === 'error' && '招待リンクをコピーできませんでした'}
        </Alert>
      </Snackbar>
      <Stack spacing={2} paddingBottom='2rem'>
        <Divider />
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography component='h2' fontSize='1.75rem'>ガイドライン</Typography>
            <LinkShare
              href={discordInvite}
              onClick={async href => {
                setDiscordInviteCopyStatus(undefined);

                try {
                  await window.navigator.clipboard.writeText(href);
                  setDiscordInviteCopyStatus('success');
                } catch {
                  setDiscordInviteCopyStatus('error');
                }
              }}
            >
              <NextLink href={discordInvite} passHref>
                <MuiLink
                  target='_blank'
                  rel='noopener noreferrer'
                  underline='hover'
                  color='#a0d8ef'
                  fontSize='large'
                >
                  discord.gg/{DISCORD_INVITE_CODE}
                  <OpenInNewIcon color='disabled' sx={{ marginLeft: '0.1rem', verticalAlign: 'middle' }} />
                </MuiLink>
              </NextLink>
            </LinkShare>
            <Box>
              <Typography fontWeight='bold'>コミュニティに参加する前に少し待ってください🤚</Typography>
              <br />
              サーバーには沢山の人がいます。
              <br />
              AzはDiscordのコミュニティであり、Discordの規約を守る必要があります。
              <br />
              お互い不快な思いをしないように、サーバーに参加する際は次の項目を守ってください。
              <br />
              また、ガイドラインは事前の告知なしで変更する可能性があります。
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography color='text.secondary'>最終更新日：202年2月6日</Typography>
            <Box
              component='ul'
              sx={{
                'li:not(:first-of-type)': {
                  margin: '1rem 0'
                },
                margin: 0,
                paddingInlineStart: '1rem'
              }}
            >
              {[
                { title: 'スパム行為や、荒らし行為をしてはいけません。' },
                { title: '個人情報を投稿してはいけません。'},
                { title: "金銭のやり取りをしてはいけません。"},
                {
                  description: '2次元であっても児童を性的に描写したコンテンツは共有してはいけません。',
                  title: '児童を性的に扱うコンテンツを共有してはいけません。'
                },
                { title: 'グロテスク（例:流血など)を含むコンテンツを投稿してはいけません。' },
                { title: 'NSFWコンテンツをNSFWとしてマークされた専用のチャンネル以外で共有してはいけません。' }
              ].map(({ title, description }) => (
                <li key={title}>
                  <Typography fontWeight='bold'>{title}</Typography>
                  {description?.split(/\r?\n/).map(line => (
                    <Typography key={line}>{line}</Typography>
                  ))}
                </li>
              ))}
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Typography component='h2' variant='h6'>用語の定義</Typography>
            <Box
              component='ul'
              sx={{
                'li:not(:first-child)': {
                  margin: '0.5rem 0'
                },
                margin: 0,
                paddingInlineStart: '1rem'
              }}
            >
              {[

                {
                  description: '絵そのものや絵を使用したアニメーションなどです。',
                  term: '2次元'
                },
                {
                  description: '実際のものを記録した写真や映像などです。\nこれには3次元のコンテンツを編集などで2次元にしたものや、見分けがつかないほどに三次元に近い二次元も含まれます。',
                  term: '3次元'
                },
                {
                  description: '一般的に言われる児童そのものや、人間でないもの（ケモノなど）の児童も含みます。',
                  term: '児童'
                },
                {
                  description: 'メールアドレスや電話番号なども含みます。',
                  term: '個人情報'
                },
                {
                  description: '現実のマネーを使用した取引などのを指す\n例:アカウント販売',
                  term: '金銭のやり取り'
                }
              ].map(({ term, description }) => (
                <li key={term}>
                  <Typography>{term}</Typography>
                  {description.split(/\r?\n/).map(line => (
                    <Typography fontSize='small' key={line}>{line}</Typography>
                  ))}
                </li>
              ))}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default DiscordPage;
