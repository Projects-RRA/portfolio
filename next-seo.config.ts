import { DefaultSeoProps } from 'next-seo';

const defaultSeoConfig: DefaultSeoProps = {
  title: 'Rinith Amin',
  description: 'Portfolio of Rinith Amin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rinithamin.in',
    site_name: 'Rinith Amin',
    images: [
      {
        url: 'https://drive.google.com/file/d/1aRa4vDAuM0sKDS31wMmGYjuDgVEdwTso/view?usp=drive_link',
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
      },
    ],
  },
  // Favicon configuration
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/src/app/favicon.ico',
    },
  ],
};

export default defaultSeoConfig;
