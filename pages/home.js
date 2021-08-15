import MainNav from "../components/MainNav";
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import { homeStyle } from "../styles/home_styles";



export default function Home() {
    return (

        <div style={homeStyle.page}>
            <MainNav></MainNav>
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
                    <div style={homeStyle.text}> <span style={homeStyle.welcome}>Привет.</span>  <br /> Меня зовут Абрамов Давид и я начинающий web разработчик.  <br />Этот сайт я создал,чтобы рассказать о себе и своих знаниях и возможно пробудить заинтересованность сотрудничества со мной над вашим проектом.</div>

                </Grid>
            </Grid>
        </div>

    )
}