import Link from 'next/link';
import style from './header.module.css';

const Header = () =>{
    return (
        <nav className={style.menu}>
             <Link href="/"> 
             <a><h1 className={style.titulo}>Fmolliet()</h1></a>
            </Link>
            <div className={style.options}>
                <ul className="buttoms">
                    
                    <li>
                        <Link href="/about">
                        <a className={style.button}>About</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/projects">   
                        <a className={style.button}>Projects</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/articles">
                        <a className={style.button}>Articles</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;