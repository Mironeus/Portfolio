import Grid from '@material-ui/core/Grid';
import styles from '../styles/home_styles.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Home() {
    const [active, setActive] = useState(false);
    const router = useRouter();
    return (
        <motion.div
            exit={{ opacity: 0 }}>
            <div className={styles.page}>
                <div className={styles.mainNavbarContent}>
                    <header className={styles.header}>
                        <nav className={styles.navbar}>
                            <div className={styles.navLogo}><Link href="/" > Portfolio 2021</Link></div>
                            <ul className={active ? styles.navMenuActive : styles.navMenu}>
                                <li className={router.pathname == '/home' ? styles.navItemActive : styles.navItem}>
                                    <div className={router.pathname == '/home' ? styles.navLinkActive : styles.navLink}>
                                        <Link href="/home" >
                                            Home
                                        </Link>
                                    </div>
                                </li>
                                <li className={router.pathname == '/study' ? styles.navItemActive : styles.navItem}>
                                    <div className={router.pathname == '/study' ? styles.navLinkActive : styles.navLink}>
                                        <Link href="/study">
                                            Study
                                        </Link>
                                    </div>
                                </li>
                                <li className={router.pathname == '/design' ? styles.navItemActive : styles.navItem}>
                                    <div className={router.pathname == '/design' ? styles.navLinkActive : styles.navLink}>
                                        <Link href="/design">
                                            Design
                                        </Link>
                                    </div>
                                </li>
                                <li className={router.pathname == '/contacts' ? styles.navItemActive : styles.navItem}>
                                    <div className={router.pathname == '/contacts' ? styles.navLinkActive : styles.navLink}>
                                        <Link href="/contacts">
                                            Contacts
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <div onClick={() => setActive(!active)} className={active ? styles.hamburgerActive : styles.hamburger}>
                                <span className={active ? styles.hamburgerLineFirst : styles.bar}></span>
                                <span className={active ? styles.hamburgerLineSecond : styles.bar}></span>
                                <span className={active ? styles.hamburgerLineThird : styles.bar}></span>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className={styles.mainHomeContent}>
                    <Grid
                        container
                        className={styles.gridContainer}
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Grid item md={6} lg={5} xl={5} sm={6} >
                            <img
                                className={styles.image}
                                src="/images/portret.jpg" />

                        </Grid>
                        <Grid item md={10} lg={6} sm={10} className={styles.textBox}>
                            <div className={styles.title}>
                                PORTFOLIO
                            </div>
                            <div className={styles.welcome}>
                                Привет.
                            </div>
                            <div className={styles.text}> Меня зовут Абрамов Давид и я начинающий web разработчик.  <br />Этот сайт я создал,чтобы рассказать о себе и своих знаниях и возможно пробудить в вас заинтересованность сотрудничества со мной над вашим проектом.</div>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </motion.div >
    )
}