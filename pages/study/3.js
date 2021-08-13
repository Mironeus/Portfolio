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
                alignItems='flex-end'
            >
                <Grid item md={12}>
                    <footer style={thirdStudy.footer}>
                        <ProgressBar now={60} animated variant='danger'></ProgressBar>
                        <div style={thirdStudy.footerNav}>
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
                    <main style={thirdStudy.mainContant}>
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
                    </main>
                </Grid>
                <Grid item md={6}>
                    <div style={thirdStudy.image}>
                        <Image
                            src="/images/sertificate_1.jpg"
                            height={550}
                            width={740}
                            alt="David Abramov"

                        />
                    </div >
                </Grid>
            </Grid>
        </div >
    )
}