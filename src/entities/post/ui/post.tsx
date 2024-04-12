import { PostId, PostTitle, PostBody } from "../../../shared/api";
import { IPost } from "../../../shared/types";
import styles from './post.module.scss';

export const Post = ({post, bodyType='expanded' }: {post: IPost, bodyType?:string}): JSX.Element => {
  return (
      <article className={styles.post}>
              <PostId id={post.id}/>
              <PostTitle title={post.title}/>
              <PostBody body={post.body} bodyType={bodyType}/>
      </article>
  )
};