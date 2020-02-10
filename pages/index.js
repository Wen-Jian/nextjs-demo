import Layout from './comps/layout'
import PostLink from './posts/comps/postLink'
import fetch from 'isomorphic-unfetch'
const Index = props => (
    <div>
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.name}>
                        <PostLink name={show.name} id={show.id} />
                    </li>
                ))}
            </ul>
        </Layout>
    </div>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index