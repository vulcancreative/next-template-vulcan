import Head from "next/head";
import PropTypes, { InferProps } from "prop-types";

const Helmet = (props: InferProps<typeof Helmet.propTypes>) => {
  const { title, description, canonical, imageAlt, data1 } = props.data;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical}></link>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Vulcanca" />
      <meta property="og:image" content="https://vulcanca.com/logo.jpg" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content="https://vulcanca.com/logo.jpg" />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@vulcanca" />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content={data1} />
    </Head>
  );
};

Helmet.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    data1: PropTypes.string.isRequired,
  }),
};

export default Helmet;
