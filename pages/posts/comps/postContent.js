import {useRouter} from 'next/router'

// const Content = () => {
//     const router = useRouter()
//     return (
//         <>
//             <h1>{router.query.id}</h1>
//             <p>this is the content.</p>
//         </>
//     )
// }

const Content = (props) => {
    const router = useRouter()
    
    return (
        <>
            {/* <h1>{router.query.id}</h1> */}
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            {props.show.image ? <img src={props.show.image.medium} /> : null}
        </>
    )
}

// Content.getInitialProps = async function(context) {
//     const router = useRouter()
//     id = router.query.id
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();
//     console.log(`Fetched show: ${show.name}`);
//     return { show };
// }

export default Content