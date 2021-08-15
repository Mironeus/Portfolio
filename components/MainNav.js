import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StyledNavButton, navbar } from '../styles/navbar_styles'

export default function MainNav() {
    const router = useRouter();
    return (
        <>
            <Navbar style={navbar.root} variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">Portfolio 2021</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey={router.pathname} as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/study/1">Study</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/design">Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link href="/contacts">Contact me</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}









// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';
// import { StyledNavButton, navbar } from '../styles/navbar_styles';

// export default function Navbar() {
//     const router = useRouter();

//     return (
//         <>
//             <AppBar position='static' style={navbar.root}>
//                 <Toolbar>
//                     <Grid
//                         container
//                         spacing={1}
//                     >
//                         <Grid item xs={12} md={3} >
//                             <StyledNavButton>
//                                 <Link href='/home'>
//                                     <a className={router.pathname == '/home' ? 'activeLink' : ''}>
//                                         HOME
//                                     </a>
//                                 </Link>
//                             </StyledNavButton>
//                         </Grid>
//                         <Grid item xs={12} md={3} >
//                             <StyledNavButton>
//                                 <Link href='/study/1'>
//                                     <a className={router.pathname == '/study/1' ? 'activeLink' : ''}>
//                                         MY STUDY
//                                     </a>
//                                 </Link>
//                             </StyledNavButton>
//                         </Grid>
//                         <Grid item xs={12} md={3}>
//                             <StyledNavButton><Link href='/design'>
//                                 <a className={router.pathname == '/design' ? 'activeLink' : ''}>
//                                     DESIGN
//                                 </a>
//                             </Link>
//                             </StyledNavButton>
//                         </Grid>
//                         <Grid item xs={12} md={3} >
//                             <StyledNavButton>
//                                 <Link href='/contacts'>
//                                     <a className={router.pathname == '/contacts' ? 'activeLink' : ''}>
//                                         CONTACTS
//                                     </a>
//                                 </Link>
//                             </StyledNavButton>
//                         </Grid>
//                     </Grid>
//                 </Toolbar>
//             </AppBar>
//         </>
//     )
// }