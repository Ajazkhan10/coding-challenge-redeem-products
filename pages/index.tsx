import Layout from "@/src/components/Layout/Layout";
import SEO from "@/src/components/seo";
import HeroSection from "@/src/sections/HeroSection";
import TechProductSection from "@/src/sections/TechProductSection";
import React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <SEO seoTitle="Home Page" description="Home Page" indexed="index" />
      <HeroSection/>
      <TechProductSection/>
    </Layout>
  );
};

export default IndexPage;
