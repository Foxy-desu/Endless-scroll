import styles from './id-block.module.scss';

export const IdBlock = ({postId}: {postId: number}) => {
    return (
      <div className={styles.postId}>
        {postId}
      </div>
    )
}