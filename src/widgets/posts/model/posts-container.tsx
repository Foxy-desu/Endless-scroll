import {useState} from "react";
import { useFetchAllPostsQuery } from "../../../app/service/api";
import { Posts } from "../ui/posts";
import { useNavigate } from "react-router-dom";
import { setPosToLocalStorage } from "../../../features/local-storage-interaction/model/local-storage-interaction";

export const PostsContainer = () => {
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const {data: posts, error, isLoading} = useFetchAllPostsQuery({start: startIndex, limit: 10});
  
    const goTo = (id: number) => {
        setPosToLocalStorage(startIndex);
        navigate(`/posts/${id}`);
    }
    
    return (
        <>
            {isLoading
               ? (
                    <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50% -50%)'}}>Loading...</div>
                )
                : error
               ? (
                    <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50% -50%)'}}>Unable to load data</div>
                )
                : posts
               ? (
                    <Posts posts={posts} setFetchStartIndex={setStartIndex} buttonHandler={goTo}/>
                )
                : (
                    <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50% -50%)'}}>No data found</div>
                )
            }
        </>
    )
};