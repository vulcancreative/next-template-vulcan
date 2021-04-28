import Close from "@icons/close";
import HamburgerMenu from "@icons/hamburger-menu";
import styles from "@styles/header.module.scss";
import Logo from "@svg/logo";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showingMobileNav, setShowingMobileNav] = useState(false);

  const handleMobileNav = () => {
    setShowingMobileNav((prevCheck) => !prevCheck);
  };

  const renderNav = () => {
    return (
      <div
        className={`${styles.nav} ${showingMobileNav ? styles.show : ""}`}
      >
        <div className={styles.navMenus}>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
        </div>
      </div>
    );
  };

  const mobileNav = () => {
    if (showingMobileNav) {
      return (
        <Close
          className={styles.mobileNav}
          onClick={() => handleMobileNav()}
        />
      );
    } else {
      return (
        <HamburgerMenu
          className={styles.mobileNav}
          onClick={() => handleMobileNav()}
        />
      );
    }
  };

  const renderLogo = () => {
    return (
      <Link href="/">
        <a className="link">
          <Logo className={styles.logo} fill="#353B55" />
        </a>
      </Link>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {renderLogo()}
        {renderNav()}
        {mobileNav()}
      </div>
    </div>
  );
};

export default Header;
