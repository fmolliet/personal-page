import React from 'react';
import Link from 'next/link';
import style from './article.module.css';

const Article = ( { artigo } ) => {

    return (
        <a href="">
        <div key={artigo.id} className={style.artigo}>
            <h3 className="artigo-titulo">{artigo.title}</h3>
            <p className="description">Techs:</p>
            <p className="techs">
                { artigo.techs.map( tech => (
                    <>
                    <Link href={`/articles-${tech}`} >
                        <a className="tech">{tech}  </a>
                    </Link>
                    </>
                ))}
                
            </p>
        </div>
        </a>
    );
}

export default Article;