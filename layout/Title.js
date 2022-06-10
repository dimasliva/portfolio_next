import { useRouter } from "next/router"
import { useState } from "react";
export default function Title() {
    let [title] = useState('')
    const one = useRouter().route.split('/')
    one.map((val) => {
        if (val !== '') {
            title += val.charAt(0).toUpperCase() + val.slice(1) + ' '
        }            
    })
    return title.length == 0 ? 'Home' : title
}