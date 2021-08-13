import Navbar from "../../components/navbar";
import { Grid } from "@material-ui/core";
import ButtonGroup from "../../components/ButtonGroup";
import { secondStudy } from "../../styles/second_study_style";
import { ProgressBar } from "react-bootstrap";
import Image from 'next/image';

export default function SecondPage() {
    return (
        <div style={secondStudy.page}>
            <Navbar></Navbar>
            <Grid
                container
                justifyContent='center'
                alignItems='flex-end'
            >
                <Grid item md={12}>
                    <footer style={secondStudy.footer}>
                        <ProgressBar now={40} animated variant='danger'></ProgressBar>
                        <div style={secondStudy.footerNav}>
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
                        <div style={secondStudy.title}>STUDY</div>
                        <blockquote style={secondStudy.quote}>
                            <p >"Великое искусство научиться многому - это браться сразу за немногое".</p>
                            <cite>-Джон Локк</cite>
                        </blockquote>



                        <div style={secondStudy.subTitle}>
                            FIGMA
                        </div>
                        <div style={secondStudy.text}>
                            <div style={secondStudy.textTitle}>Новое слово в моем лексиконе.</div>
                            Когда я познакомился с <span style={secondStudy.secondSpan}>FIGMA</span>  я понял, что такое удобное создание макетов и презентаций. Я полюбил <span style={secondStudy.secondSpan}>FIGMA</span> и с удовольствием использую этот инструмент в работе.
                            <div style={secondStudy.subTextTitle}>DANGER!</div>
                            МАКЕТ ЭТОГО ПРОЕКТА СОЗДАН НА <span style={secondStudy.secondSpan}>FIGMA</span>.
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={5}>
                    <Image
                        src="/images/figma_project.jpg"
                        height={580}
                        width={900}
                        alt="David Abramov"
                    />

                </Grid>
            </Grid>
        </div >
    )
}