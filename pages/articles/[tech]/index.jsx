import { useRouter } from 'next/router'
import styles from '../../../src/styles/articles.module.css';
import HeaderMenu from '../../../src/components/HeaderMenu';
import Article from '../../../src/components/Article';
import artigos from '../data';

function ArticleTech() {
    const router = useRouter()
    const { tech } = router.query
    
    let artigos_filtrados = artigos.filter(artigo => {
        if( artigo.techs.includes(tech) )
            return artigo;
    })

    return (
        <>
        <HeaderMenu />
        <div className="main">
            <div className="techName">Artigos encontrados com {tech} :</div>
            <div className={styles.texto}>
                {artigos_filtrados.map( artigo  => (<Article artigo={artigo}/>) )}
            </div>
        </div>
        </>
    )
}

export default ArticleTech;