import { Post } from '../../post/api';
import styles from './post-list-item.module.scss';

export const PostListItem = ({data}: {data: IPost}) => {
  const {postId, heading, postContent, buttonPath, buttonContent} = data;
  return (
    <li className={styles.listItem}>
      <Post
        postId={postId}
        heading={heading}
        postContent={postContent}
        buttonPath={buttonPath}
        buttonContent={buttonContent}
      />
    </li>
  )
};