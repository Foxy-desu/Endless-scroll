import { useNavigate, useParams } from "react-router-dom";
import { useFetchPostByIdQuery } from "../../../app/service/api";
import { FullPostPage } from "../ui/full-post-page";
import { Button } from "../../../shared/api";
import { Post } from "../../../entities/post/api";

export const FullPostPageContainer = () => {
    
    const navigate = useNavigate();
    const {id} = useParams() as {id: string};
    const {data: post, error, isLoading} = useFetchPostByIdQuery(id);

    return (
        <>
            {isLoading
                ? (
                    <FullPostPage>
                        <p style={{margin: "auto"}}>Loading...</p>
                    </FullPostPage>
                )
                : error
                ? (
                    <FullPostPage>
                        <p style={{margin: "auto"}}>Unable to load data</p>
                    </FullPostPage>
                  )
                : post
                ? (<FullPostPage>
                    <Post post={post}/>
                    <Button clickHandler={navigate} btnText="Назад"/>
                   </FullPostPage>
                   )
                : (
                    <FullPostPage>
                        <p style={{margin: "auto"}}>No post with id{id} was found</p>
                        <Button clickHandler={navigate} btnText="Back to posts"/>
                    </FullPostPage>

                )}
        </>
    )

}