import MainNav from "../../components/MainNav";
import { Grid } from "@material-ui/core";
import ButtonGroup from "../../components/ButtonGroup";
import { secondStudy } from "../../styles/second_study_style";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from "../../styles/MainProjectTheme";
import { ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 540,
    },
});

export default function SecondPage() {
    const classes = useStyles();
    return (
        <div style={secondStudy.page}>
            <MainNav></MainNav>
            <Grid
                container
                justifyContent='center'
                alignItems='flex-end'
            >
                <Grid item md={12}>
                    <footer style={secondStudy.footer}>
                        <LinearProgress variant="determinate" color='secondary' value={40} />
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
                    <main style={secondStudy.mainContent}>
                        <div style={secondStudy.subTitle}>
                            FIGMA
                        </div>
                        <div style={secondStudy.text}>
                            <div style={secondStudy.textTitle}>Новое слово в моем лексиконе.</div>
                            Когда я познакомился с <span style={secondStudy.secondSpan}>FIGMA</span>  я понял, что такое удобное создание макетов и презентаций. Я полюбил <span style={secondStudy.secondSpan}>FIGMA</span> и с удовольствием использую этот инструмент в работе.
                            <div style={secondStudy.subTextTitle}>DANGER!</div>
                            МАКЕТ ЭТОГО ПРОЕКТА СОЗДАН НА <span style={secondStudy.secondSpan}>FIGMA</span>.
                        </div>
                    </main>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card className={classes.root}>
                        <CardContent>

                            <ThemeProvider theme={theme}>
                                <Typography gutterBottom variant="h5" component="h2">
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
                    {/* <Image
                        src="/images/figma_project.jpg"
                        height={580}
                        width={900}
                        alt="David Abramov"
                    /> */}

                </Grid>
            </Grid>
        </div >
    )
}