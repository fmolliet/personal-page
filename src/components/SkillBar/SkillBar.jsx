import Link from 'next/link';
import style from './skillbar.module.css';

const SkillBar = ( { skill } ) => {
    return (
        <div key={skill.id} className={style.progressbar}>
            <p className="name">{skill.name}</p>
            <span className={style.bar}>
                <div className={style.progress} style={{width:`${skill.level}%`}}>{skill.level}%</div>
            </span>
        </div>
    );
}

export default SkillBar;