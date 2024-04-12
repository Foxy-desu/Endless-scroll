import React from "react";
import { PostsContainer } from "../../../widgets/posts/api"; 
import styles from "./main-page.module.scss";

export const MainPage = () => {
    return (
        <div className={styles.content}>
            <PostsContainer/>
        </div>
    )
};