import React from 'react';
import HeaderMenu from '../src/components/HeaderMenu';
import styles from '../src/styles/articles.module.css';
import Article from '../src/components/Article';

const Articles = () => {
    const artigos = [
        {
            id:1,
            title: 'Zero to Hero: Docker',
            techs: ['Docker', 'HV', 'Linux'],
            url: 'http://google.com'
        },
        {
            id: 2,
            title: 'MultiCloud System',
            techs: ['Node', 'AWS', 'Azure'],
            url: 'http://google.com'
        },
        {
            id: 3,
            title: 'ReactJS com NextJS',
            techs: ['React', 'Next', 'Node'],
            url: 'http://google.com'
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