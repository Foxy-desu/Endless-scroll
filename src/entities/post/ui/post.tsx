import { Button, ContentBlock, Heading, IdBlock } from '../../../shared/api';
import styles from './post.module.scss';

//decide where to implement post block type
export const Post = ({postId, heading, postContent, buttonContent, buttonPath}: IPost) => {
  return (
    <div className={styles.post}>
      <article className={styles.post_article}>
          {postId
            ? <IdBlock postId = {postId}/>
            : false
          }
          <Heading textContent={heading} />
          <ContentBlock textContent={postContent}/>
      </article>
      <Button toPath={buttonPath} textContent={buttonContent}/>
    </div>
  )
}