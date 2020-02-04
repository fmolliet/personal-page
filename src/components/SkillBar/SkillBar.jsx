import Link from 'next/link';

const SkillBar = ( { skill } ) => {
    return (
        <div key={skill.id} className="bar">
            <p className="name">{skill.name}</p>
            <div className="progress" style={{width:`${skill.level}%`}}>{skill.level}%</div>
        </div>
    );
}

export default SkillBar;