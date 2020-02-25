import styles from './Main.module.css';
//import photo from '../../assets/pp.jpg'
//        <img src={photo} alt="photo" />
function Main(){
    return(
        <div className={styles.container}>
        <img src="https://avatars0.githubusercontent.com/u/16329234?s=460&v=4" alt="avatar" className={styles.avatar}/>
        <div className={styles.title}>Resume</div>
        <div className={styles.about}>Hi, I'm Fabio Molliet, Fullstack dev of PHP, ReactJS, NodeJS. Since I was a kid I liked coding and developing servers, so I grew up and decide to be a great developer!</div>
        </div>
    );
}

export default Main;