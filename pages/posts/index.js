import Link from "next/dist/client/link"
import classes from '../../styles/error.module.css'
import { useDispatch, useSelector } from 'react-redux'

export default function Index ({posts}) {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.toggle)
    return (
        <div className={classes.about}>
            <h1>{toggle ? 'An example of working with Next.js' : 'Пример работы с Next.js'}</h1>
            <p>{toggle ? 'On this page is a small example of my work with Next.js. Using the example of opening an element that comes with api' : 'На этой странице маленький пример моей работы с Next.js. На примере открытия элемента, который приходит с api'}</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection: 'column', alignContent: 'center' }}>
            {posts.map(val => {
                return (
            <li key={val.id}>
                <div className={classes.aboutCard}>
                    <h5 className="mb-2 cursor">Id: {val.id}</h5>
                    <p>
                        <Link href={`/posts/${val.id}`}>
                            <span className="cursor">{val.title}</span>
                        </Link>
                    </p>
                </div>
            </li>
                )
            })}
            </ul>
            
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return { 
        props: {posts}
    }
}