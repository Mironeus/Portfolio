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
            {/* /* HISTORY BLOCK */}
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
                                <div className={styles.historySubTitle}>
                                    Немного предыстории.
                                </div>
                            </HistoryTitle>
                            <HistorySubTitle>
                                <blockquote className={styles.historyQuote}>
                                    <p >"Великое искусство научиться многому - это браться сразу за немногое".</p>
                                    <cite>- Джон Локк<span className={styles.udemyOneAnchor} name='start'></span> </cite>
                                </blockquote>
                            </HistorySubTitle>
                            <HistoryMainText>
                                <div className={styles.historyText}>
                                    Мой путь начался с просьбы сделать презентацию на моей текущей работе.<br></br>
                                    Я изучил <span className={styles.historyFirstSpan}>Power Point, Photoshop</span>  и также узнал, что такое<span className={styles.historySecondSpan}> Типографика</span> и насколько это важный элемент в дизайне.
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

                    <Grid item lg={6} md={6} xs={11} sm={7} >
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
                                                GUNTER® - Пневматические пистолеты и аксессуары
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
                                                GUNTER® - Пневматические пистолеты и аксессуары
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
                                                GUNTER® - Пневматические пистолеты и аксессуары
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
                                                GUNTER® - Пневматические пистолеты и аксессуары
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
                                                GUNTER® - Пневматические пистолеты и аксессуары
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
                                                Desperado® - мачете
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
                                                Desperado® - мачете
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
                                                Desperado® - мачете
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
                                                Desperado® - мачете
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
                                                Desperado® - мачете
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
                                                Y-Shot® - Рогатки и духовые трубки
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
                                                Y-Shot® - Рогатки и духовые трубки
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
                                                Y-Shot® - Рогатки и духовые трубки
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
                                                Y-Shot® - Рогатки и духовые трубки
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
                                                Y-Shot® - Рогатки и духовые трубки
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
                                                Макет этого сайта на Figma
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
                                    <div className={styles.figmaTextTitle}>Новое слово в моем лексиконе.</div>
                                </FigmaSubTitle>
                                <FigmaMainText>
                                    <div className={styles.figmaMainText}>
                                        Когда я познакомился с <span className={styles.figmaSecondSpan} >FIGMA</span>  я понял, что такое удобное создание макетов и презентаций с безопасным облачным хранением и возможностью вернуться к своему проекту на любом компьютере. Набор инструментов прост и крайне удобен, что позволяет быстро и качественно создавать макеты.
                                    </div>
                                </FigmaMainText>
                                <FigmaFooter>
                                    <div className={styles.figmaFooterText}>
                                        <div className={styles.figmaSubTextTitle}>DANGER!</div>
                                        МАКЕТ ЭТОГО ПРОЕКТА СОЗДАН НА <span className={styles.figmaSecondSpan}>FIGMA</span>.
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
                                                Макет этого сайта на Figma
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
                                    <div className={styles.udemyOneTextTitle}> <span className={styles.udemyOneSpanTitle}><span className={styles.udemyOneSpanSubTitle}>Курс</span> The Web Developer BootCamp 2021</span> </div>
                                </UdemyOneSubTitle>
                                <UdemyOneMainText>
                                    <div className={styles.udemyOneMainText}>
                                        Вот и пришел момент, когда я задумался о создании сайтов и начал активно искать курсы.
                                        Конечно я выбрал <span className={styles.udemyOneSpan}>FRONTEND</span> направление, так как мне ближе интерфейсы и визуальное проектирование.
                                        Для обучения я выбрал ресурс <span className={styles.udemyOneSpan}>Udemy</span>.
                                        А моим ментором стал - <span className={styles.udemyOneSpan}>Colt Steele.</span>
                                        Прекрасный человек, который доступно объяснил очень много вещей. <br />
                                        К сожалению, наврятли он знает о моём существовании.😂)))<br />
                                        <span className={styles.udemyOneAnchor} name='udemyOne'></span>
                                        Курс содержал огромное количество новой информации, но было интересно. Мы изучали базовые основы - <span className={styles.udemyOneSpan}>HTML, CSS, JS</span>. А в финальном проекте использовали <span className={styles.udemyOneSpan}>Mongo c Mongoose и Express</span> на бэке и деплоили этот багаж знаний на <span className={styles.udemyOneSpan}>Heroku</span>. Стоит заметить, что мы не использовали фреймворки - проcто MVC и магия EJS. Также поработали с  API Mapbox и большим количеством утилит (passport, joi, sanitize-html и....много еще чего).
                                        <br />
                                        <div className={styles.udemyOneResult}>
                                            <span className={styles.udemyOneSpan}>ИТОГ:</span>  Общее понимание <span className={styles.udemyOneSpan}>FULLSTACK</span> разработки, осознание, что фреймворки придумали не просто так и радость, что остался жив после всего этого😁.
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
                                    <div className={styles.udemyTwoTextTitle}> <span className={styles.udemyTwoSpanTitle}><span className={styles.udemyTwoSpanSubTitle}>Курс</span> The Modern React Bootcamp (Hooks, Context, NextJS, Router)</span> </div>
                                </UdemyTwoSubTitle>
                                <UdemyTwoMainText>
                                    <div className={styles.udemyTwoMainText}>
                                        После окончания курсов, мне стало понятно, что необходимо изучить хотя-бы один фреймворк, так как без них сейчас никуда. Я выбрал<span className={styles.udemyTwoSpan} name='udemyTwo'> React</span>, так он невероятно популярен, имеет множество различных дополнительных библиотек и большое комьюнити.
                                        Я познакомился с <span className={styles.udemyTwoSpan}>компонентами, пропсами, хуками, стейтами, JSX</span>. Мы билдили много небольших проектов, которые помогали закрепить навыки. Также познакомились с <span className={styles.udemyTwoSpan}>React-Router</span> и как строить маршруты. Также коснулись стейт менеджмента <span className={styles.udemyTwoSpan}>(useReducer & useContext)</span>. Ближе к концу курса познакомились с прекрасным фреймворком <span className={styles.udemyTwoSpan}>NEXT.js (basic routing, fetching data, Link Component)</span>, который произвёл на меня впечатление, поэтому первый проект я решил строить именно на нём.
                                        Приятным бонусом стал ознакомительный мини курс по Webpack.
                                        <br />
                                        <div className={styles.udemyTwoResult}>
                                            <span className={styles.span}>ИТОГ:</span>  Общее понимание библиотеки <span className={styles.udemyTwoSpan}>React</span>, знакомство с фреймворком <span className={styles.udemyTwoSpan}>Next.js</span>, знакомство с <span className={styles.udemyTwoSpan}>Webpack</span>.

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
