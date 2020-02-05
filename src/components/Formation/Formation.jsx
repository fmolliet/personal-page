import style from './formation.module.css';

const Formation = ( { formation } ) => {
    return (
        <div className="formation">
            <h2 className="formationTitle">
                {formation.college + " - " + formation.course}
            </h2>
            <h6 className="date">
                {formation.date} 
            </h6>
            <p>
                {formation.description}
            </p>
        </div>
    );
} 

export default Formation;