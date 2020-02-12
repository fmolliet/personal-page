import HeaderMenu from '../../src/components/HeaderMenu';
import styles from '../../src/styles/articles.module.css';
import Article from '../../src/components/Article';
import artigos from './data';

const Articles = () => {
    return (
        <>
            <HeaderMenu />
            <div className="main">


            <div className={styles.texto}>
                {artigos.map( artigo  => (<Article artigo={artigo}/>) )}
            </div>
            </div>
        </>
    );
}

export default Articles;