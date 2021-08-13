import Navbar from "../../components/navbar";
import { Grid } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from "../../components/ButtonGroup";
import { firstStudy } from "../../styles/first_study_style";
import { ProgressBar } from "react-bootstrap";

export default function FirstPage() {
    return (
        <div style={firstStudy.page}>
            <Navbar></Navbar>
            <Grid
                container
                justifyContent='center'
                alignItems='flex-end'
            >
                <Grid item md={12}>
                    <footer style={firstStudy.footer}>
                        <ProgressBar now={20} animated variant='danger'></ProgressBar>
                        <div style={firstStudy.footerNav}>
                            <ButtonGroup ></ButtonGroup>
                        </div>

                    </footer>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={6}>
                    <Grid item md={7}>
                        <div style={firstStudy.title}>STUDY</div>
                        <blockquote style={firstStudy.quote}>
                            <p >"Великое искусство научиться многому - это браться сразу за немногое".</p>
                            <cite>-Джон Локк</cite>
                        </blockquote>
                        <div style={firstStudy.subTitle}>
                            Немного предыстории.
                        </div>
                        <div style={firstStudy.text}>
                            Мой путь начался с презентаций, на моей текущей работе.<br></br>
                            Я изучал <span style={firstStudy.firstSpan}>Power Point, Photoshop</span>   и также понял, что <span style={firstStudy.secondSpan}>Типографика</span> - это важный элемент в дизайне. На свои первые презентации я смотрю с улыбкой, но это и есть прогресс, поэтому всё хорошо.
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={5}>
                    <div style={firstStudy.carousel}>
                        <Carousel
                            variant='dark'
                            indicators='true'
                        >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/oldpres/1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption >
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
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
                                    <div style={firstStudy.carouselText}>
                                        Y-Shot® - Рогатки и духовые трубки
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div >
                </Grid>
            </Grid>

        </div>
    )
}