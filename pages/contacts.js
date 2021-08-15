import MainNav from "../components/MainNav";
import { ContactStyles } from "../styles/contacts_styles";
import Grid from '@material-ui/core/Grid';

export default function Contacts() {
    return (
        <div style={ContactStyles.page}>
            <MainNav></MainNav>
            <Grid
                style={ContactStyles.text}
                container
                alignItems='flex-end'
                justifyContent='flex-end'
                direction='row'
            >
                <Grid item md={4}>
                    <span style={ContactStyles.span}>EMAIL: <br /> </span>sendtoabramov@gmail.com <br />
                    <span style={ContactStyles.span}>GIT: <br /> </span>github.com/Mironeus/ <br />
                    <span style={ContactStyles.span}>BEHANCE: <br /></span>behance.net/abramov204bc78 <br />
                    <span style={ContactStyles.span}>PHONE <span style={ContactStyles.phoneCity}>(Russia,Saint-Petersburg)</span>: <br /> </span> +7-904-614-93-29
                </Grid>

            </Grid>



        </div >
    )
}