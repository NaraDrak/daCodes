import React from 'react';
import styles from './styles.module.css';
import { Box, Typography } from '@mui/material';
import bestwork from '../../assets/bestwork.png'
import aws from '../../assets/AWS.png'
import efy from '../../assets/EFY.png'
import bestcode from '../../assets/bestcode.png'
import svg from '../../assets/SVG/wave.svg'
const Footer: React.FC = () => {
  return (
      <Box className={styles.footerContainer}>
        <img src={svg} className={styles.backsvg}/>

        <Box className={styles.footerContent}>
          
          <Typography variant='h4' fontWeight={600}>We are coding the world of tomorrow<span className={styles.blink_me}>_</span></Typography>
          <Typography>
          DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.
          </Typography>
        </Box>
          <Box className={styles.logosContainer}>
            <img className={styles.logoBestCode} src={bestcode} alt="Logo 2" />
            <img className={styles.logoBestWork} src={bestwork} alt="Logo 1" />
            <img className={styles.logos} src={efy} alt="Logo 2" />
            <img className={styles.logos} src={aws} alt="Logo 2" />
          </Box>
      </Box>
  );
}

export default Footer;
