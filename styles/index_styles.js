import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';

export const Index = {
  page: {
    backgroundImage: "url(images/background_welcome.jpg)",
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'relative',
  },
  welcome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',
    fontWeight: '150',
    marginBottom: '0px'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30px'
  },
  and: {
    fontSize: '50px'
  },
  myName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    fontWeight: '300',
    paddingTop: '0px'
  },
  myNameIs: {
    fontSize: '20px',
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
    fontSize: '90px',
    fontWeight: '200',
    textAlign: 'end',
    paddingTop: '100px',
    paddingRight: '45px'
  },
  portfolio: {
    fontSize: '50px'
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
    fontSize: '30px',
    transition: '1s',
    borderRadius: '12px',
    boxShadow: '0px 2px 2px #DF5B61',
    '&:hover': {
      boxShadow: '0px 4px 25px #DF5B61',
      backgroundColor: '#DF5B61'
    },
  }
})(Button);