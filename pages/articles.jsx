import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu';
import styles from '../src/styles/articles.module.css';
import Article from '../src/components/Articles';
//{artigos.map(artigo => {})}

const Articles = () => {
    const artigos = [
        {
            id:1,
            title: 'Zero to Hero: Docker',
            techs: ['Docker', 'HV', 'Linux'],
        },
        {
            id: 2,
            title: 'MultiCloud System',
            techs: ['Node', 'AWS', 'Azure']
        },
        {
            id: 3,
            title: 'ReactJS com NextJS',
            techs: ['React', 'Next', 'Node']
        }
    ];

    return (
        <>
            <HeaderMenu />
            <div className={styles.texto}>
                {artigos.map( artigo  => (<Article artigo={artigo}/>) )}
            </div>
        </>
    );
}

export default Articles;