import Head from "next/head";

interface SEOProps {
  seoTitle?: string;
  metaDescription?: string;
  description?: string;
  indexed?: string | boolean;
}


const SEO: React.FC<SEOProps> = ({
  seoTitle = "Home Page",
  metaDescription = "Home Page",
  description = "Home Page",
  indexed = "index",
}) => {
  const robotsContent =
    indexed === "noIndex&Allowed"
      ? "noindex,follow"
      : indexed === "noIndex"
      ? "noindex,nofollow"
      : "index,follow";

  return (
    <Head>
      <title>{seoTitle}</title>

      {/* Robots Meta Tag */}
      <meta name="robots" content={robotsContent} />

      {/* Meta Description */}
      <meta
        name="description"
        content={metaDescription || description || "Default description"}
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta
        property="og:description"
        content={metaDescription || description || "Default description"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aerolabchallenge" />
      <meta property="og:image" content="/path/to/image.jpg" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta
        name="twitter:description"
        content={metaDescription || description}
      />
      <meta name="twitter:image" content="/path/to/image.jpg" />

      {/* Theme Color */}
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        sizes="192x192"
      />
    </Head>
  );
};

export default SEO;
