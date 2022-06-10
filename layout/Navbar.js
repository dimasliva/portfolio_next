import Head from 'next/head'
import Router from 'next/router'
import Title from "./Title";
import { useRouter } from "next/router"
import Toggle from './Toggle';
import { useSelector } from 'react-redux';

export default function Navbar({children}) {
    const route = useRouter().route.slice(1)
    const toggle = useSelector(state => state.toggle)
    let home = route == '' ? 'nav-link active' : 'nav-link'
    let about = route == 'about' ? 'nav-link active' : 'nav-link'
    let contact = route == 'contact' ? 'nav-link active' : 'nav-link'
    let post = route == 'posts' ? 'nav-link active' : 'nav-link'
    return (
        <div className='relative'>
            <nav className="navbar navbar-dark bg-dark px-6">
                <div className="navbar-header">
                    <span onClick={() => Router.push('/')}>
                        <h4 className="text-info fw-bold cursor">Dmitry
                            <span className="text-white">Ermilov</span>
                        </h4>
                    </span>
                </div>
                <ul className="navbar-nav flex-row text-white fs-5">
                    <li className="cursor nav-item">
                        <a 
                        className={home}
                        onClick={() => Router.push('/')}>
                            {toggle ? 'Home' : 'Главная'}
                        </a>
                    </li>
                    <li className="cursor mx-4"
                     onClick={() => Router.push('/about')}>
                        <a className={about}>{toggle ? 'About' : 'Обо мне'}</a>
                    </li>
                    <li className="cursor" onClick={() => Router.push('/contact')}>
                        <a className={contact}>{toggle ? 'Contact' : 'Написать'}</a>
                    </li>
                    <li className="cursor ms-3" onClick={() => Router.push('/posts')}>
                        <a className={post}>{toggle ? 'Example' : 'Пример'}</a>
                    </li>
                </ul>
            </nav>
            <div className="toggle">
                <Toggle/>
            </div>
            <div>{children}</div>
            <style jsx>{`
            .relative {position: relative;}
            .cursor {cursor: pointer}
            .px-6 {padding: 1em 5%}
            .toggle {
                position:absolute;
                top: 80px;
                right: 100px;
            }
            `}</style>
        <Head>
            <title>{Title()} Page</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
        </Head>
        </div>
    )
}