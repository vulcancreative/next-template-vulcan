import Head from "next/head";

import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <>
      <Head>
        <title>Merrimack Valley Realty: About</title>
      </Head>
      <Header />
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <h1>About</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
