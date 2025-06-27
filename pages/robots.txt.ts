import { GetServerSideProps } from "next";

const EXTERNAL_DATA_URL = "https://coding-challenge-redeem-products.vercel.app";

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: ${EXTERNAL_DATA_URL}/sitemap.xml
`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(generateRobotsTxt());
  res.end();

  return {
    props: {},
  };
};

export default function Robots() {
  return null;
}
