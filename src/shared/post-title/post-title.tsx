import styles from './post-title.module.scss';
import { PostTitleType } from '../types';

export const PostTitle: PostTitleType = ({title}) => {
    return <h2 className={styles.post_title}>{title}</h2>
};