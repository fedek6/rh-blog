import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { CommonSEO } from "@/components/SEO";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CommonSEO />
      <h1 className="text-3xl font-display font-bold text-english-vermillion">
        This is test page
      </h1>
      <p className="font-mono">Lorem ipsum</p>
    </DefaultLayout>
  );
};

export default Home;
