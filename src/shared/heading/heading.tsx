import styles from './heading.module.scss';

export const Heading = ({textContent}: {textContent: string}) => {
    return (
        <h1 className={styles.heading}>{textContent}</h1>
    )
};