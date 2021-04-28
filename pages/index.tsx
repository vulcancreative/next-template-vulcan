import Helmet from "@components/helmet";

import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.scss";

const metadata = {
  title: "Next Template Vulcan",
  description: "Your description",
  canonical: "https://vulcanca.com",
  imageAlt: "imageAlt",
  data1: "2 minutes",
};

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
      <Helmet data={metadata} />
      <Header />
      <div className={styles.homePage}>{hero()}</div>
      <Footer />
    </>
  );
};

export default Home;
