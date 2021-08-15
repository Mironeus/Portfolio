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
  },
  mainButton: {
    fontSize: '1.5vw',
  }
}

