import MainNav from "../../components/MainNav";
import { Grid } from "@material-ui/core";
import ButtonGroup from "../../components/ButtonGroup";
import { fourthStudy } from "../../styles/fourth_study_styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Image from 'next/image';

export default function SecondPage() {
    return (
        <div style={fourthStudy.page}>
            <MainNav></MainNav>
            <Grid
                container
                justifyContent='center'
                alignItems='flex-end'
            >
                <Grid item md={12}>
                    <footer style={fourthStudy.footer}>
                        <LinearProgress variant="determinate" color='secondary' value={80} />
                        <div style={fourthStudy.footerNav}>
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
                    <main style={fourthStudy.mainContent}>
                        <div style={fourthStudy.subTitle}>
                            UDEMY
                        </div>
                        <div style={fourthStudy.text}>
                            <div style={fourthStudy.textTitle}> <span style={fourthStudy.spanTitle}><span style={fourthStudy.spanSubTitle}>Курс</span> The Modern React Bootcamp (Hooks, Context, NextJS, Router)</span> </div>
                            Я изначально ориентировался на <span style={fourthStudy.span}> React</span>, во-первых на фоне общего хайпа, а во-вторых мне он показался чем-то изумительным и интересным.
                            Этот курс помог мне закрепить общие знания о библиотеке. Я познакомился с <span style={fourthStudy.span}>компонентами, пропсами, хуками, стейтами, JSX</span>. Мы билдили много учебных проектов, которые помогали закрепить навыки. Также познакомились с <span style={fourthStudy.span}>React-Router</span> и как строить маршруты. Также коснулись стейт менеджмента <span style={fourthStudy.span}>(useReducer & useContext)</span>. Ближе к концу курса познакомились с прекрасным фреймворком <span style={fourthStudy.span}>NEXT.js (basic routing, fetching data, Link Component)</span>, который произвёл на меня впечатление, поэтому первый проект я решил строить именно на нём.
                            Приятным бонусом стал ознакомительный мини курс по Webpack.
                            <br />
                            <div style={fourthStudy.result}>
                                <span style={fourthStudy.span}>ИТОГ:</span>  Общее понимание библиотеки <span style={fourthStudy.span}>React</span>, знакомство с фреймворком <span style={fourthStudy.span}>Next.js</span>, знакомство с <span style={fourthStudy.span}>Webpack</span>.
                                <span style={fourthStudy.span}> <br /> PS:</span> Всю информацию сложно запомнить, но теперь я знаю куда копать.
                            </div>
                        </div>
                    </main>
                </Grid>
                <Grid item md={6}>
                    <Image
                        src="/images/sertificate_2.jpg"
                        height={450}
                        width={640}
                        alt="David Abramov"
                    />
                </Grid>
            </Grid>
        </div >
    )
}