import { Layout } from "@/components/Layout";
import { CommonSEO } from "@/components/SEO";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <CommonSEO />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
};

export default Home;
