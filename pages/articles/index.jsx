import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import styles from '../../src/styles/articles.module.css';
import Article from '../../src/components/Article';
import artigos from './data';

const Articles = () => {
    return (
        <>
            <Header />
            <div className="main">


                <div className={styles.texto}>
                    {artigos.map( artigo  => (<Article artigo={artigo}/>) )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Articles;