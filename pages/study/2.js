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
                            <div style={secondStudy.title}>STUDY</div>
                            <blockquote style={secondStudy.quote}>
                                <p >"Великое искусство научиться многому - это браться сразу за немногое".</p>
                                <cite>-Джон Локк</cite>
                            </blockquote>
                        </Grid>
                        <Grid item md={8}>

                            <div style={secondStudy.subTitle}>
                                FIGMA
                            </div>
                            <div style={secondStudy.text}>
                                <div style={secondStudy.textTitle}>Новое слово в моем лексиконе.</div>
                                Когда я познакомился с <span style={secondStudy.secondSpan}>FIGMA</span>  я понял, что такое удобное создание макетов и презентаций. Я полюбил <span style={secondStudy.secondSpan}>FIGMA</span> и с удовольствием использую этот инструмент в работе.
                                <div style={secondStudy.subTextTitle}>DANGER!</div>
                                <Grid item md={4}>
                                    МАКЕТ ЭТОГО ПРОЕКТА СОЗДАН НА <span style={secondStudy.secondSpan}>FIGMA</span>.
                                </Grid>
                            </div>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={5}>
                    <div style={secondStudy.image}>
                        <Image
                            className='figmaImage'
                            src="/images/figma_project.jpg"
                            height={280}
                            width={450}
                            alt="David Abramov"
                            layout="responsive"

                        />
                    </div >
                </Grid>
            </Grid>
            <footer style={secondStudy.footer} >
                <div style={secondStudy.footerNav}>
                    <ButtonGroup ></ButtonGroup>
                </div>
                <ProgressBar variant='danger' animated now={40}></ProgressBar>
            </footer>
        </div >
    )
}