import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import styles from '../src/styles/about.module.css';
import SkillBar from '../src/components/SkillBar';

const About = () =>{
    const skill = { 
        id: 1,
        name: 'ReactJS',
        time: '',
        level: 70
    };

    return(
        <>
        <Header />
        <div className="main">
            <div className={styles.about}>
        
                <p className="aboutme">
                A sobre eu:
                </p>
                <br />
                <div className="aboutskills">
                    <SkillBar skill={skill} />
                </div>
                
                <div className="aboutformation">

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default About;