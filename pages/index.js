import React from 'react';
import styles from '../styles/index_styles.module.css';
import { Grid } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Hello() {
  const router = useRouter();
  return (
    <motion.div
      exit={{ opacity: 0 }}
    >
      <div className={styles.page}>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
        >
          <Grid item md={12} xs={12}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src="/images/logo.png" alt="David Abramov Logo"
              />
            </div>
          </Grid>
          <Grid item md={12} xs={12}>
            <main>
              <div className={styles.welcome}>HELLO &nbsp;<span className={styles.and}> & </span>&nbsp;WELCOME</div>
              <div className={styles.myName}> <span className={styles.myNameIs}>MY NAME IS &nbsp;</span> DAVID ABRAMOV</div>
              <div className={styles.centerButton}>
                <Button variant='danger' size='lg' className={styles.mainButton} >
                  <Link href='/home'> ENTER</Link>
                </Button>
              </div>
            </main>
          </Grid>
          <Grid md={12} xs={12}>
            <footer className={styles.footer}>
              Portfolio&nbsp;2021
            </footer>
            <hr width='50%' className={styles.line} />
          </Grid>
        </Grid>
      </div >
    </motion.div>
  )
}

