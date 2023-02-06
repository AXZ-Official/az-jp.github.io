import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { type FC, useState } from 'react';
import CommonDialog from '~/components/CommonDialog';

type ImgurImageShowcaseItem = Readonly<{
  ext: '.gif' | '.png',
  imgurId: string,
  message: string,
  deviceWarning?: boolean
}>;

type ImgurImageShowcaseProps = Readonly<{
  images: readonly ImgurImageShowcaseItem[],
  title: string
}>;

const openImage = ({ imgurId, ext }: ImgurImageShowcaseItem): void => {
  const a = document.createElement('a');

  a.href = `https://i.imgur.com/${imgurId}${ext}`;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  a.click();
};

const ImgurImageShowcase: FC<ImgurImageShowcaseProps> = ({ images, title }) => {
  const [image, setImage] = useState<ImgurImageShowcaseItem>();

  return (
    <Box>
      <CommonDialog
        open={typeof image !== 'undefined'}
        message='この画像は環境によっては重くなる可能性があります'
        confirmButtonText='開きます'
        onCancel={() => setImage(undefined)}
        onConfirm={() => {
          setImage(undefined);

          if (image) {
            openImage(image);
          }
        }}
      />
      <Stack spacing={1}>
        <Typography>{title}</Typography>
        <Stack
          overflow='auto'
          direction='row'
          spacing={2}
        >
          {images.map(image => {
            const { message, imgurId, ext, deviceWarning } = image;

            return (
              <Card
                key={`${imgurId}${ext}`}
                sx={{ flexShrink: 0 }}
              >
                <CardContent
                  sx={{
                    '&:last-child': {
                      paddingBottom: '0.5rem'
                    }
                  }}
                >
                  <Stack spacing={1}>
                    <NextLink
                      passHref
                      href={`https://i.imgur.com/${imgurId}${ext}`}
                    >
                      <MuiLink
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={ev => ev.preventDefault()}
                      >
                        <CardActionArea onClick={() => deviceWarning ? setImage(image) : openImage(image)}>
                          <Box
                            alt=''
                            sx={{ verticalAlign: 'middle' }}
                            crossOrigin='anonymous'
                            component='img'
                            width={160}
                            height={160}
                            src={`https://i.imgur.com/${imgurId}b${ext}`}
                          />
                        </CardActionArea>
                      </MuiLink>
                    </NextLink>
                    <Typography color='text.secondary'>{message}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ImgurImageShowcase;
export {
  type ImgurImageShowcaseItem,
  type ImgurImageShowcaseProps
};
