import styles from './content-block.module.scss';

export const ContentBlock = ({textContent}: {textContent: string}) => {
    return (
        <p className={styles.content}>{textContent}</p>
    )
}