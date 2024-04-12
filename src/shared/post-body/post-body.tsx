import styles from './post-body.module.scss';
import { PostBodyType } from '../types';

enum BodyType {
    Expanded = 'expanded',
    Short ='short'
};

export const PostBody: PostBodyType = ({body, bodyType}) => {
    return <p className={`${styles.post_body}${bodyType === BodyType.Short? ' ' + styles.post_body__elipsed : ''}`}>{body}</p>
};
