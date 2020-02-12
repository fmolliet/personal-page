import Link from 'next/link';
import style from './article.module.css';

const Article = ( { artigo } ) => {

    return (
       
        <div key={artigo.id} className={style.artigo}>
             <a href={artigo.url}><h3 className="artigo-titulo">{artigo.title}</h3></a>
            <h5 className="description">Techs:</h5>
            <p className="techs">
                { artigo.techs.map( tech => (
                    <>
                    <Link href={`/articles/${tech}`} >
                        <a className="tech">{tech}  </a>
                    </Link>
                    </>
                ))}
                
            </p>
        </div>
       
    );
}

export default Article;