import MainNavbar from '../components/MainNavbar';
import Grid from '@material-ui/core/Grid';
import styles from "../styles/design_styles.module.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Design() {
    return (
        <div className={styles.page}>
            <div className={styles.fixedNav}>
                <MainNavbar></MainNavbar>
            </div>
            <Grid
                container
                direction='raw'
                justifyContent='flex-start'
                alignItems='start'
            >
                <Grid item md={10} sm={9}>
                    <blockquote className={styles.quote}>
                        <div className={styles.quoteText}>
                            <p >"The human mind is the principal agent of creation.
                                How we think is the prism for how we percieve reality".</p>
                        </div>
                        <div className={styles.quoteAuthor}>
                            <cite>- Kilroy J. Oldster</cite>
                        </div>
                    </blockquote>
                </Grid>
            </Grid>

            <Grid
                container
                direction='raw'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={11} sm={12} lg={11} xl={7}>
                    <div className={styles.bottomText}>
                        Представляю вашему вниманию  коллекцию своих работ
                    </div>
                    <div className={styles.carousel}>
                        <Carousel
                            variant='dark'
                            indicators='true'
                        >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/4.jpg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/5.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/6.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/7.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/8.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </Grid>
                <Grid item md={12}>

                </Grid>
            </Grid>

        </div >
    )
}