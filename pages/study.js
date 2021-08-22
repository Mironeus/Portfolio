import MainNavbar from "../components/MainNavbar";
import { Grid } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/study.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from "../styles/MainProjectTheme";
import { ThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FigmaImage, FigmaTitle, FigmaSubTitle, FigmaMainText, FigmaFooter } from "../scrollAnimation/figmaScroll";
import { UdemyOneImage, UdemyOneTitle, UdemyOneSubTitle, UdemyOneMainText } from "../scrollAnimation/udemyOneScroll";
import { UdemyTwoImage, UdemyTwoTitle, UdemyTwoSubTitle, UdemyTwoMainText } from "../scrollAnimation/udemyTwoScroll";
import { HistoryCarousel, HistoryTitle, HistorySubTitle, HistoryMainText } from "../scrollAnimation/historyScroll";


const useStyles = makeStyles({
    root: {
        maxWidth: 750,
    },
    media: {
        height: 490,
    },
});

export default function FirstStudy() {
    const classes = useStyles();

    return (
        <div className={styles.page}>
            { /* HISTORY BLOCK */}
            <div className={styles.fixedNav}>
                <MainNavbar></MainNavbar>
            </div>
            <div className={styles.historyBlock}>
                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item lg={5} md={6}>
                        <main className={styles.historyMainContent}>
                            <HistoryTitle>
                                <div className={styles.historySubTitle} name='top'>
                                    How to begin.
                                </div>
                            </HistoryTitle>
                            <HistorySubTitle>
                                <blockquote className={styles.historyQuote}>
                                    <p >"Education is not the filling of a pail, but the lighting of a fire."</p>
                                    <cite>- William Butler Yeats<span className={styles.udemyOneAnchor} name='start'></span> </cite>
                                </blockquote>
                            </HistorySubTitle>
                            <HistoryMainText>
                                <div className={styles.historyText}>
                                    My path began from a task to create a presentation in company of my current job.<br></br>
                                    I learned <span className={styles.historyFirstSpan}>Power Point, Photoshop</span> and realized, that <span className={styles.historySecondSpan}> typography</span> is very important piece of good web design.
                                </div>
                            </HistoryMainText>
                        </main>
                        <div className={styles.historyScrollFooterAlign}>
                            <div className={styles.historyScrollFooter}>
                                scroll down
                                <Link href='#figma'><FontAwesomeIcon icon={faChevronDown} className={styles.historyScrollIcon} /></Link>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={6} md={6} xs={11} sm={11} >
                        <HistoryCarousel>
                            <div className={styles.carousel}>
                                <Carousel
                                    variant='dark'
                                    indicators='true'
                                >
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/archive.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/1.jpg"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                GUNTER® - Air guns and accessories
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/2.jpg"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                GUNTER® - Air guns and accessories
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/3.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                GUNTER® - Air guns and accessories
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/4.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                GUNTER® - Air guns and accessories
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/5.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                GUNTER® - Air guns and accessories
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/6.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Desperado® - machete
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/7.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Desperado® - machete
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/8.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Desperado® - machete
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/9.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Desperado® - machete
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/10.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Desperado® - machete
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/11.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Y-Shot® - Slingshots and wind pipes
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/12.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Y-Shot® - Slingshots and wind pipes
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/13.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Y-Shot® - Slingshots and wind pipes
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/14.jpg"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Y-Shot® - Slingshots and wind pipes
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="/images/oldpres/15.jpg"
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption >
                                            <div className={styles.carouselText}>
                                                Y-Shot® - Slingshots and wind pipes
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                            </div >
                        </HistoryCarousel>
                    </Grid>

                </Grid>
            </div>

            {/* FIGMA BLOCK */}
            <div className={styles.figmaBlock}>

                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xl={6} md={6} sm={12} xs={10} >
                        <div className={styles.figmaCardImage}>
                            <FigmaImage>
                                <Card className={classes.root} >
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                THE LAYOUT OF THIS PROJECT.
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/figma_project.jpg"
                                        title="Figma Project"
                                    />
                                </Card>
                            </FigmaImage>

                        </div>
                    </Grid>
                    <span className={styles.figmaAnchor} name='figma'></span>
                    <Grid item md={6} lg={6} sm={10}>
                        <main className={styles.figmaMainContent}>
                            <FigmaTitle>
                                <div className={styles.figmaSubTitle} >
                                    FIGMA
                                </div>
                            </FigmaTitle>
                            <div className={styles.figmaText}>
                                <FigmaSubTitle>
                                    <div className={styles.figmaTextTitle}>A new word in my vocabulary.</div>
                                </FigmaSubTitle>
                                <FigmaMainText>
                                    <div className={styles.figmaMainText}>
                                        When I met <span className={styles.figmaSecondSpan} >FIGMA</span>  I realized how to create layouts and presentations easily with secure cloud storage and the ability 'continue to work' on any computer. The set of tools is simple and extremely convenient, which allows you to quickly and efficiently create layouts.
                                    </div>
                                </FigmaMainText>
                                <FigmaFooter>
                                    <div className={styles.figmaFooterText}>
                                        <div className={styles.figmaSubTextTitle}>DANGER!</div>
                                        <span className={styles.figmaSecondSpan}> THE LAYOUT OF THIS PROJECT CREATED IN FIGMA</span>.
                                    </div>
                                </FigmaFooter>
                                <div className={styles.figmaScrollFooterAlign}>
                                    <div className={styles.figmaScrollFooter}>
                                        <span style={{ fontWeight: '400' }}>scroll down</span>
                                        <Link href='#udemyOne'><FontAwesomeIcon icon={faChevronDown} className={styles.figmaScrollIcon} /></Link>
                                    </div>
                                </div>
                            </div>

                        </main>
                    </Grid>
                    <Grid item md={6}>
                        <div className={styles.figmaCardImageForVerticalPhone}>
                            <FigmaImage>
                                <Card className={classes.root} >
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="h2" >
                                                THE LAYOUT OF THIS PROJECT.
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image="/images/figma_project.jpg"
                                        title="Figma Project"
                                    />
                                </Card>
                            </FigmaImage>
                        </div>
                    </Grid>

                </Grid>
            </div >
            {/* /* UDEMY ONE BLOCK */}
            <div className={styles.udemyOneBlock}>
                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item lg={6} md={6} xl={6}>
                        <main className={styles.udemyOneMainContent}>
                            <UdemyOneTitle>
                                <div className={styles.udemyOneSubTitle}>
                                    UDEMY
                                </div>
                            </UdemyOneTitle>
                            <div className={styles.udemyOneText}>
                                <UdemyOneSubTitle>
                                    <div className={styles.udemyOneTextTitle}> <span className={styles.udemyOneSpanTitle}> The Web Developer BootCamp 2021</span> <span className={styles.udemyOneSpanSubTitle}>course</span></div>
                                </UdemyOneSubTitle>
                                <UdemyOneMainText>
                                    <div className={styles.udemyOneMainText}>
                                        So the moment came when I thought about creating sites and began to actively search for courses. Of course, I chose the <span className={styles.udemyOneSpan}>FRONTEND</span> direction, cause interfaces and visual design are closer to me. For learning, I chose the <span className={styles.udemyOneSpan}>Udemy</span>.
                                        And my mentor was <span className={styles.udemyOneSpan}>Colt Steele - </span>
                                        a wonderful person who explained a lot of things in an accessible way.<br />
                                        <span className={styles.udemyOneAnchor} name='udemyOne'></span>
                                        The course contained a wealth of new information and it was interesting. We learned the basics of - <span className={styles.udemyOneSpan}>HTML, CSS, JS</span>. And in the final project, we used <span className={styles.udemyOneSpan}>Mongo c Mongoose и Express</span> on the back-end and deployed this knowledge base on <span className={styles.udemyOneSpan}>Heroku</span>. We did not use frameworks - just MVC and EJS magic. We also worked with the Mapbox API and a lot of utilities (passport, joi, sanitize-html and .... a lot more).
                                        <br />
                                        <div className={styles.udemyOneResult}>
                                            <span className={styles.udemyOneSpan}>VERDICT:</span>  General understanding of <span className={styles.udemyOneSpan}>FULLSTACK</span> development.
                                        </div>
                                    </div>
                                </UdemyOneMainText>
                                <div className={styles.udemyOneScrollFooterAlign}>
                                    <div className={styles.udemyOneScrollFooter}>
                                        scroll down
                                        <Link href='#udemyTwo'><FontAwesomeIcon icon={faChevronDown} className={styles.udemyOneScrollIcon} /></Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </Grid>
                    <Grid item md={6} xl={5} xs={11}>
                        <UdemyOneImage>
                            <img src="/images/sertificate_1.png" alt="David Abramov" className={styles.udemyOneImage} />
                        </UdemyOneImage>
                    </Grid>
                </Grid>
            </div>
            {/* /* UDEMY TWO BLOCK */}
            <div className={styles.udemyTwoBlock}>
                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item md={6} xs={12}>
                        <UdemyTwoImage>
                            <img
                                className={styles.udemyTwoImage}
                                src="/images/sertificate_2.jpg"
                                alt="David Abramov"
                            />
                        </UdemyTwoImage>
                    </Grid>
                    <Grid item md={6} xl={6} lg={6}>
                        <main className={styles.udemyTwoMainContent}>
                            <UdemyTwoTitle>
                                <div className={styles.udemyTwoSubTitle}>
                                    UDEMY
                                </div>
                            </UdemyTwoTitle>
                            <div className={styles.udemyTwoText}>
                                <UdemyTwoSubTitle>
                                    <div className={styles.udemyTwoTextTitle}> <span className={styles.udemyTwoSpanTitle}>The Modern React Bootcamp (Hooks, Context, NextJS, Router)</span> <span className={styles.udemyTwoSpanSubTitle}>course</span> </div>
                                </UdemyTwoSubTitle>
                                <UdemyTwoMainText>
                                    <div className={styles.udemyTwoMainText}>
                                        After completing <span className={styles.udemyTwoCourseText}>The Web Developer BootCamp 2021 course</span>, it became clear to me that it's necessary to know at least one framework. I choose<span className={styles.udemyTwoSpan} name='udemyTwo'> React</span>, because it is incredibly popular, has many different libraries and a large community.
                                        This course introduced me to <span className={styles.udemyTwoSpan}>components, props, hooks, states, JSX</span>. We built a lot of small projects. Worked with <span className={styles.udemyTwoSpan}>React-Router</span> and build routes and touched upon the state management <span className={styles.udemyTwoSpan}>(useReducer & useContext)</span>. In the end of this course, we got introduced with the excellent framework<span className={styles.udemyTwoSpan}> NEXT.js (basic routing, fetching data, Link Component)</span>, which impressed me, so I decided to build the first project on it.
                                        <span className={styles.udemyTwoCourseText}> The Webpack mini course was a nice bonus.</span>
                                        <br />
                                        <div className={styles.udemyTwoResult}>
                                            <span className={styles.udemyTwoSpan}>VERDICT:</span>  General understanding <span className={styles.udemyTwoSpan}>React</span> library, basics understanding of <span className={styles.udemyTwoSpan}>Next.js</span> framework, introducing <span className={styles.udemyTwoSpan}>Webpack</span>.

                                        </div>
                                    </div>
                                </UdemyTwoMainText>
                            </div>
                        </main>
                        <div className={styles.udemyTwoScrollFooterAlign}>
                            <div className={styles.udemyTwoScrollFooter}>
                                <Link href='#start'><FontAwesomeIcon icon={faChevronUp} className={styles.udemyTwoScrollIcon} /></Link>
                                start page
                            </div>
                        </div>
                    </Grid>
                    <Grid item xl={6} md={8} lg={6} xs={11} >
                        <UdemyTwoImage>
                            <img
                                className={styles.udemyTwoImageForVerticalPhoneSize}
                                src="/images/sertificate_2.jpg"
                                alt="David Abramov"
                            />
                        </UdemyTwoImage>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}
