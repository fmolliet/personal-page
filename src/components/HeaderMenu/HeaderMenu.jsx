import Link from 'next/link';

const HeaderMenu = () =>{
    return (
        <div className="menu">
            <h1 className="titulo">Fmolliet()</h1>
            <div className="options">
                <ul className="buttoms">
                    <li>
                        <Link href="/">   
                        <a className="buttom">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                        <a className="buttom">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                        <a className="buttom">Articles</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users">
                        <a className="buttom">Usuários</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;