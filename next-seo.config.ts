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
        url: 'https://example.com/your-image.jpg', // Direct URL to your Open Graph image
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
      href: '/favicon.ico', // Relative path to your favicon in the `public` directory
    },
  ],
};

export default defaultSeoConfig;
