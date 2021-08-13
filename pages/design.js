import Navbar from "../components/navbar";
import Grid from '@material-ui/core/Grid';
import { DesignStyles } from "../styles/design_styles";
import Carousel from 'react-bootstrap/Carousel';

export default function Design() {
    return (
        <div style={DesignStyles.page}>
            <Navbar></Navbar>
            <Grid
                container
                direction='raw'
                justifyContent='center'
                alignItems='start'
            >
                <Grid item md={10}>
                    <div style={DesignStyles.title}>DESIGN</div>
                    <blockquote style={DesignStyles.quote}>
                        <p >"The human mind is the principal agent of creation.
                            How we think is the prism for how we percieve reality".</p>
                        <cite>- Kilroy J. Oldster</cite>
                    </blockquote>
                </Grid>
            </Grid>

            <Grid
                container
                direction='raw'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item md={5}>
                    <div style={DesignStyles.carousel}>
                        <Carousel
                            variant='dark'
                            indicators='true'
                        >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/4.jpg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/5.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/6.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/7.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/design/8.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div style={DesignStyles.bottomText}>
                        Представляю вашему вниманию небольшую коллекцию своих работ
                    </div>
                </Grid>
            </Grid>

        </div >
    )
}