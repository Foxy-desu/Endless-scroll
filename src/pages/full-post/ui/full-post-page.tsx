import { Children } from "react";
import styles from "./full-post-page.module.scss";

export const FullPostPage = ({children}: {children: JSX.Element[] | JSX.Element}): JSX.Element => {

    return (
        <div className={styles.full_post}>
            {Children.map(children, child => {
                return (
                    <>
                        {child}
                    </>
                )
            })}
        </div>
    )
}