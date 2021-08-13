import Navbar from "../../components/navbar";
import { Grid } from "@material-ui/core";
import ButtonGroup from "../../components/ButtonGroup";
import { thirdStudy } from "../../styles/third_study_styles";
import { ProgressBar } from "react-bootstrap";
import Image from 'next/image';

export default function SecondPage() {
    return (
        <div style={thirdStudy.page}>
            <Navbar></Navbar>

            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={6}>
                    <Grid
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='start'
                    >
                        <Grid item md={10}>
                            <div style={thirdStudy.title}>STUDY</div>
                            <blockquote style={thirdStudy.quote}>
                                <p >"Великое искусство научиться многому - это браться сразу за немногое".</p>
                                <cite>-Джон Локк</cite>
                            </blockquote>
                        </Grid>
                        <Grid item md={9}>

                            <div style={thirdStudy.subTitle}>
                                UDEMY
                            </div>
                            <div style={thirdStudy.text}>
                                <div style={thirdStudy.textTitle}> <span style={thirdStudy.spanTitle}><span style={thirdStudy.spanSubTitle}>Курс</span> The Web Developer BootCamp 2021</span> </div>
                                Вот и пришел момент, когда я задумался о создании сайтов и начал активно искать курсы.
                                Конечно я выбрал <span style={thirdStudy.span}>FRONTEND</span> направление, так как мне ближе интерфейсы.
                                Для обучения я выбрал ресурс <span style={thirdStudy.span}>Udemy</span>.
                                А моим ментором стал - <span style={thirdStudy.span}>Colt Steele.</span>
                                Прекрасный человек, который доступно объяснил очень много вещей. К сожалению, наврятли он знает о моём существовании.
                                На меня падали тонны информации, но было интересно. Мы изучали базовые основы - <span style={thirdStudy.span}>HTML, CSS, JS</span>. А в финальном проекте использовали <span style={thirdStudy.span}>Mongo c Mongoose и Express</span> на бэке и деплоили этот багаж знаний на <span style={thirdStudy.span}>Heroku</span>. Стоит заметить, что мы не использовали фреймворки - проcто MVC и магия EJS. Также поработали с  API Mapbox и большим количеством утилит (passport, joi, sanitize-html и....много еще чего).
                                <br />
                                <div style={thirdStudy.result}>
                                    <span style={thirdStudy.span}>ИТОГ:</span>  Общее понимание <span style={thirdStudy.span}>FULLSTACK</span> разработки, осознание, что фреймворки придумали не просто так и радость, что остался жив после всего этого.
                                </div>
                            </div>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={5}>
                    <div style={thirdStudy.image}>
                        <Image
                            src="/images/sertificate_1.jpg"
                            height={450}
                            width={640}
                            alt="David Abramov"
                            layout="responsive"

                        />
                    </div >
                </Grid>
            </Grid>
            <footer style={thirdStudy.footer} >
                <div style={thirdStudy.footerNav}>
                    <ButtonGroup ></ButtonGroup>
                </div>
                <ProgressBar variant='danger' animated now={60}></ProgressBar>
            </footer>
        </div >
    )
}