import styles from "../styles/navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainNavbar() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.navLogo}>
              <Link href="/">
                <a>Portfolio 2023</a>
              </Link>
            </div>
            <ul className={active ? styles.navMenuActive : styles.navMenu}>
              <li
                className={
                  router.pathname == "/home"
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <div
                  className={
                    router.pathname == "/home"
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  <Link href="/home">
                    <a>Home</a>
                  </Link>
                </div>
              </li>
              <li
                className={
                  router.pathname == "/study"
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <div
                  className={
                    router.pathname == "/study"
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  <Link href="/study">
                    <a>Study</a>
                  </Link>
                </div>
              </li>
              <li
                className={
                  router.pathname == "/design"
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <div
                  className={
                    router.pathname == "/design"
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  <Link href="/design">
                    <a>Design</a>
                  </Link>
                </div>
              </li>
              <li
                className={
                  router.pathname == "/contacts"
                    ? styles.navItemActive
                    : styles.navItem
                }
              >
                <div
                  className={
                    router.pathname == "/contacts"
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  <Link href="/contacts">
                    <a>Contacts</a>
                  </Link>
                </div>
              </li>
            </ul>
            <div
              onClick={() => setActive(!active)}
              className={active ? styles.hamburgerActive : styles.hamburger}
            >
              <span
                className={active ? styles.hamburgerLineFirst : styles.bar}
              ></span>
              <span
                className={active ? styles.hamburgerLineSecond : styles.bar}
              ></span>
              <span
                className={active ? styles.hamburgerLineThird : styles.bar}
              ></span>
            </div>
          </nav>
        </header>
      </div>
    </motion.div>
  );
}
