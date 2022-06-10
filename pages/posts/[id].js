import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Post({post: serverPost}) {
    const [post, setPost] = useState(serverPost)
    console.log(serverPost)
    const router = useRouter()
    useEffect(() => {
        async function load() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`)
            const data = await res.json()
            setPost(data)
        }
        if(!serverPost) {
            load()
        }
    }, [])

    if(!post) {
        return <h1>Loading...</h1>
    }
    return (
        <div 
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            className="mx-auto w-50"
        >
            <h3 className="mx-auto">Post id: {post.id}</h3>
            <h5 className="mx-auto">{post.title}</h5>
            <Head><title>Post {post.id}</title></Head>
        </div>
    )
}
// export async function getServerSideProps({params}) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const post = await res.json()
//     return {
//         props: {post}
//     }
// }
Post.getInitialProps = async ({query, req}) => {
    if(!req) {
        return {post: null}
    }
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = await res.json()
    return {
        post
    }
}