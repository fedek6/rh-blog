import Head from "next/head";
import { getTitle, siteMeta } from "@/config/meta";

type Props = {
  title?: string;
  description?: string;
};

export const CommonSEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{getTitle(title)}</title>
      <meta name="description" content={description ?? siteMeta.description} />
    </Head>
  );
};
