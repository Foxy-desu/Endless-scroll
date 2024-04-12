import React, {useEffect} from 'react';
import _ from 'lodash';
import {useInView} from 'react-intersection-observer';
import { Post } from "../../../entities/post/api";
import { IPost, PostsNavigatonType } from '../../../shared/types';
import { getPosFromLocalStorage } from '../../../features/local-storage-interaction/api';
import { Button } from '../../../shared/api';
import styles from './posts.module.scss';

export const Posts = ({posts, setFetchStartIndex, buttonHandler}: {posts: IPost[], setFetchStartIndex: React.Dispatch<React.SetStateAction<number>>, buttonHandler: PostsNavigatonType}) =>  {
    const {ref: bottom, inView: bottomInView} = useInView({
        threshold: 0.3,
    });
    const {ref: top, inView: topInView} = useInView({
        threshold: 0.3,
    });
    const enlistPosts = (posts: IPost[]) => {
        return posts.map((post, index, arr)=> {
            const firstIndex = 0;
            const lastIndex = arr.length - 1;

            return (
                <li className={styles.post_list___post_card} key={post.id} id={String(post.id)} ref={index === firstIndex? top : index === lastIndex? bottom : null}>
                    <Post post={post} bodyType='short'/>
                    <Button btnText='See full post' postId={post.id} clickHandler={buttonHandler} />
                </li>
            )
        })
    };

    function checkFetchFailure() {
      //this function checks if the scroll bar has reached top, but no fetch was fired due to fast scrolling
      //if fetch failure happened, the functions scrolls down by the hight of the top element
      //to refire fetching.
      const currScrollPos = window.pageYOffset;
      if (currScrollPos === 0) {
        const parent = document.querySelector('#post-list');
        const firstChild = parent? parent.firstElementChild : null;
  
        if (firstChild && firstChild.id !== "1") {
          const scrollLength = firstChild.getBoundingClientRect().height;
          window.scrollBy(0, scrollLength);
          console.log('we fixed scroll position')
        }
      };
    };
    const trottledScroll = _.throttle(checkFetchFailure, 500);

    useEffect(() => {
      getPosFromLocalStorage(setFetchStartIndex);
    }, [])
      
    useEffect(() => {
      if (bottomInView) {
        //check if local storage has start index information and set it either from Localstorage or this function.
        getPosFromLocalStorage(setFetchStartIndex) && setFetchStartIndex((prev) => prev + 3);
      }
    }, [bottomInView]);
    
    useEffect(() => {
      
      if(topInView) {
        getPosFromLocalStorage(setFetchStartIndex) && setFetchStartIndex((prev) => prev > 0? prev - 3 : prev);
      }
    }, [topInView])

    useEffect(()=> {
      window.addEventListener('scroll', trottledScroll);
      return () => {
        window.removeEventListener('scroll', trottledScroll);
      }
    }, []) 


    return (
      <ul className={styles.post_list} id='post-list'>
          {enlistPosts(posts)}
      </ul>
    )
}