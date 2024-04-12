import styles from './post-id.module.scss';
import { PostIdType } from '../types';

export const PostId: PostIdType = ({id}) => {
  return <p className={styles.post_id}>#{id}</p>
};