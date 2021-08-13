import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';

export const Index = {
  page: {
    backgroundImage: "url(images/background_welcome.jpg)",
    backgroundSize: 'cover',
    height: '100vh',
    backgroundPosition: 'center'
  },
  welcome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '6vw',
    fontWeight: '150',
    marginBottom: '0px',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px'
  },
  and: {
    fontSize: '3vw'
  },
  myName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2vw',
    fontWeight: '300',
    paddingTop: '0px'
  },
  myNameIs: {
    fontSize: '1.5vw',
    fontWeight: '100',
    textAlign: 'center',
    paddingTop: '0px',
    marginTop: '0px'
  },
  centerButton: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: '4vw',
    fontWeight: '200',
    textAlign: 'end',
    paddingTop: '100px',
    paddingRight: '30px'
  },
  portfolio: {
    fontSize: '2vw'
  }
}

export const StyledButton = withStyles({
  root: {
    backgroundColor: '#DF5B61',
    paddingLeft: '75px',
    paddingRight: '75px',
    color: '#fff',
    fontFamily: " 'Montserrat', sans-serif ",
    fontWeight: '600',
    boxShadow: 'none',
    fontSize: '1.5vw',
    transition: '1s',
    borderRadius: '12px',
    boxShadow: '0px 2px 2px #DF5B61',
    '&:hover': {
      boxShadow: '0px 4px 25px #DF5B61',
      backgroundColor: '#DF5B61'
    },
  }
})(Button);