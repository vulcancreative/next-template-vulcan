import Head from "next/head";

import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.scss";

const hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>Home</h1>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Vulcan: Home</title>
      </Head>
      <Header />
      <div className={styles.homePage}>{hero()}</div>
      <Footer />
    </>
  );
};

export default Home;
