import {useRouter} from 'next/router'
import Layout from '../comps/layout'
import Content from './comps/postContent'
import fetch from 'isomorphic-unfetch'

// export default function Post() {

//     return (
//         <Layout>
//             <Content/>
//         </Layout>
//     )
// }

const Post = props => (
    <Layout>
        <Content show={props.show}/>
    </Layout>
)

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    console.log(`${id}`)
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
  
    console.log(`Fetched show: ${show.name}`);
  
    return { show };
  };

  export default Post

// const Content = props => (
//     <Layout>
//         <h1>{props.show.name}</h1>
//         <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//         {props.show.image ? <img src={props.show.image.medium} /> : null}
//   </Layout>
// )

// Content.getInitialProps = async function(context) {
//     const { id } = context.query;
//     console.log(`${id}`)
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();
  
//     console.log(`Fetched show: ${show.name}`);
  
//     return { show };
//   };

// export default Content