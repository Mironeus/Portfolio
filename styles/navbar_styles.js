import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const StyledNavButton = withStyles({
    root: {
        fontSize: '30px',
        fontWeight: '200',
        fontFamily: " 'Montserrat', sans-serif ",
        color: 'white',
        borderRadius: '20px',
        '&:hover': {
            color: '#fffff',
            textShadow: '0px 7px 25px #ffffff !important',
            transition: '0.2s ease-in-out',
            fontWeight: '600',
        },
        '@media(max-width:992px)': {
            fontSize: '20px',
            textAlign: 'left'
        },
    },
})(Button);

export const navbar = {
    root: {
        backgroundColor: '#333333',
        textAlign: 'center',
    },

}