import { GetServerSideProps } from "next";

const EXTERNAL_DATA_URL = "https://coding-challenge-redeem-products.vercel.app";

const generateSitemap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${EXTERNAL_DATA_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.write(generateSitemap());
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
