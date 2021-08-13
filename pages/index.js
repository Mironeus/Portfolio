import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Index, StyledButton } from '../styles/index_styles.js';
import { Grid } from '@material-ui/core';

export default function Hello() {
  return (
    <div style={Index.page}>
      <div style={Index.logo}>
        <Image
          src="/images/logo.png" alt="Your Name"
          width={350}
          height={350}
        />
      </div>
      <div style={Index.welcome}>HELLO &nbsp;<span style={Index.and}> & </span>&nbsp;WELCOME</div>
      <h4 style={Index.myName}> <span style={Index.myNameIs}>MY NAME IS &nbsp;</span> DAVID ABRAMOV</h4>
      <div style={Index.centerButton}>
        <StyledButton>
          <Link href='/home'>
            <a>
              <span style={Index.buttonText}>ENTER</span>
            </a>
          </Link>
        </StyledButton>
      </div>
      <Grid container
        justifyContent='flex-end'>
        <Grid item={6}>
          <h2 style={Index.footer}> <span style={Index.portfolio}>Portfolio</span>&nbsp;2021</h2>
          <hr width='100%' align='right' />
        </Grid>
      </Grid>


    </div>
  )
}

