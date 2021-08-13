import Navbar from "../components/navbar";
import { ContactStyles } from "../styles/contacts_styles";
import Grid from '@material-ui/core/Grid';

export default function Contacts() {
    return (
        <div style={ContactStyles.page}>
            <Navbar></Navbar>
            <Grid
                container
                justifyContent='center'
                alignItems='center'>

                <Grid item md={12} sm={12}>
                    <div style={ContactStyles.title}>CONTACTS</div>
                </Grid>
                <Grid item md={12} sm={12}>
                    <div style={ContactStyles.text}>
                        <span style={ContactStyles.span}>EMAIL: <br /> </span>sendtoabramov@gmail.com <br />
                        <span style={ContactStyles.span}>GIT: <br /> </span>github.com/Mironeus/ <br />
                        <span style={ContactStyles.span}>BEHANCE: <br /></span>behance.net/abramov204bc78 <br />
                        <span style={ContactStyles.span}>PHONE <span style={ContactStyles.phoneCity}>(Russia,Saint-Petersburg)</span>: <br /> </span> +7-904-614-93-29
                    </div>
                </Grid>
            </Grid>


        </div>
    )
}