import Navbar from "../components/navbar";
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import { homeStyle } from "../styles/home_styles";



export default function Home() {
    return (

        <div style={homeStyle.page}>
            <Navbar></Navbar>
            <Grid
                container
                style={homeStyle.gridContainer}
                direction="row"
                justifyContent='center'
                alignItems='center'
            >
                <Grid item lg={5} xs={6} sm={6} >
                    <Image
                        className='homeAvatar'
                        src="/images/portret.jpg"
                        height={750}
                        width={720}
                        alt="David Abramov"
                    />

                </Grid>
                <Grid item lg={6} sm={6} style={homeStyle.textBox}>
                    <div style={homeStyle.title}>
                        PORTFOLIO
                    </div>
                    <div style={homeStyle.text}>Это моё портфолио и первый проект, который ляжет в репозиторий на Github®.
                        Здесь я попытаюсь рассказать о себе и своих знаниях и возможно смогу получить первую работу -
                        то к чему стремился и для чего посвятил много времени.</div>

                </Grid>
            </Grid>
        </div>

    )
}