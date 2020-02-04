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
        <br />
            <SkillBar skill={skill} />
        </>
    );
}

export default About;