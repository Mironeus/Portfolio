import MainNavbar from "../components/MainNavbar";
import styles from "../styles/contacts_style.module.css";
import Grid from "@material-ui/core/Grid";

export default function Contacts() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.fixedNav}>
          <MainNavbar></MainNavbar>
        </div>
        <div className={styles.mainContent}>
          <Grid
            className={styles.text}
            container
            alignItems="flex-end"
            justifyContent="flex-end"
            direction="row"
          >
            <Grid item md={4}>
              <div className={styles.contactsText}>
                <span className={styles.span}>
                  EMAIL: <br />{" "}
                </span>{" "}
                <a href="mailto:writetoabramov@gmail.com">
                  writetoabramov@gmail.com
                </a>
                <br />
                <span className={styles.span}>
                  GIT: <br />{" "}
                </span>
                <a href="https://github.com/abramov-david?tab=repositories">
                  {" "}
                  github.com/abramov-david
                </a>
                <br />
                <span className={styles.span}>
                  BEHANCE: <br />
                </span>
                <a href="https://www.behance.net/abramov204bc78">
                  {" "}
                  behance.net/abramov204bc78
                </a>
                <br />
                <span className={styles.span}>
                  PHONE{" "}
                  <span className={styles.phoneCity}>(Serbia,Novi Sad)</span>
                  : <br />{" "}
                </span>{" "}
                <a href="tel:+7-904-614-93-29">+381 637 699 192</a>
                <br />
              </div>
              <div className={styles.copyRight}>
                © 2022 David Abramov All Rights Reserved
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
