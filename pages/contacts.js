import MainNavbar from "../components/MainNavbar";
import styles from '../styles/contacts_style.module.css'
import Grid from '@material-ui/core/Grid';

export default function Contacts() {
    return (
        <>
            <div className={styles.page}>
                <MainNavbar></MainNavbar>
                <div className={styles.mainContent}>
                    <Grid
                        className={styles.text}
                        container
                        alignItems='flex-end'
                        justifyContent='flex-end'
                        direction='row'
                    >
                        <Grid item md={4}>
                            <div className={styles.contactsText}>
                                <span className={styles.span}>EMAIL: <br /> </span>sendtoabramov@gmail.com <br />
                                <span className={styles.span}>GIT: <br /> </span>github.com/abramov-david <br />
                                <span className={styles.span}>BEHANCE: <br /></span>behance.net/abramov204bc78 <br />
                                <span className={styles.span}>PHONE <span className={styles.phoneCity}>(Russia,Saint-Petersburg)</span>: <br /> </span> +7-904-614-93-29 <br />
                            </div>
                            <div className={styles.copyRight}>
                                © 2021 David Abramov All Rights Reserved
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div >
        </>
    )
}