
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.container_fluid}>
            <small><FontAwesomeIcon icon={faCode}/>  by <strong>Fábio Molliet</strong><br /> Powered by NextJS</small>
            <div className={'center'}>
                <a className={styles.icons, styles.email} href="mailto:fabiomolliet@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope}/> 
                </a>
                <a className={styles.icons, styles.github} href="https://www.github.com/fmolliet">
                    <FontAwesomeIcon  icon={faGithub}/> 
                </a>
                <a className={styles.icons, styles.linkedin} href="https://www.linkedin.com/in/fabiomolliet" >
                    <FontAwesomeIcon   icon={faLinkedin}/> 
                </a>
                <a className={styles.icons, styles.medium} href="https://medium.com/">
                    <FontAwesomeIcon icon={faMedium}/> 
                </a>
            </div>
        </footer>
    );
}

export default Footer;