import Navbar from "../components/navbar";
import { ContactStyles } from "../styles/contacts_styles";
import Grid from '@material-ui/core/Grid';

export default function Contacts() {
    return (
        <div style={ContactStyles.page}>
            <Navbar></Navbar>
            <Grid
                container
                direction='column'
                justifyContent='flex-end'
                alignItems='flex-end'>

                <Grid item md={12}>
                    <div style={ContactStyles.title}>CONTACTS</div>
                </Grid>
                <Grid item md={12}>
                    <div style={ContactStyles.text}>
                        <span style={ContactStyles.span}>EMAIL:</span> sendtoabramov@gmail.com <br />
                        <span style={ContactStyles.span}>GIT:</span> sendtoabramov@gmail.com <br />
                        <span style={ContactStyles.span}>BEHANCE:</span> https://www.behance.net/abramov204bc78 <br />
                        <span style={ContactStyles.span}>PHONE(Russia,Saint-Petersburg):</span> +7-904-614-93-29
                    </div>
                </Grid>
            </Grid>


        </div>
    )
}