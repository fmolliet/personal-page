import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu';
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
        <HeaderMenu />
        A sobre eu:
        <div className="aboutme">

        </div>
        <br />
        <div className="aboutskills">
            <SkillBar skill={skill} />
        </div>
        
        <div className="aboutformation">

        </div>
            
        </>
    );
}

export default About;