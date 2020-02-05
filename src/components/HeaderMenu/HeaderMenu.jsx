import Link from 'next/link';
import style from './header.module.css';

const HeaderMenu = () =>{
    return (
        <nav className={style.menu}>
            <h1 className={style.titulo}>Fmolliet()</h1>
            <div className={style.options }>
                <ul className="buttoms">
                    <li>
                        <Link href="/">   
                        <a className={style.button}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                        <a className={style.button}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                        <a className={style.button}>Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users">
                        <a className={style.button}>Usuários</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderMenu;