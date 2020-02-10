import Link from 'next/link'

const PostLink = props => (
    <Link href='posts/[id]' as={`/posts/${props.id}`}>
        <a>{props.name}</a>
    </Link>
)

export default PostLink