import styles from './posts.module.scss';
import { PostListItem } from '../../../entities/post-list-item/api';



export const Posts = ({posts}: {posts: IPost[]}) => {

    function enlistPosts (posts: IPost[]) {
        return posts.map((post)=> {
            return <PostListItem data={post}/>
        })
    }

    return (
        <section className={styles.posts}>
            <h2 className={styles.posts_heading}>Posts</h2>
            <ul className={styles.posts_postsList}>
                {enlistPosts(posts)}
            </ul>
        </section>
    )
}