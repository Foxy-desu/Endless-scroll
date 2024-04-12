export type AnchorType = React.RefObject<any> | ((node?: Element | null) => void);
export type ReturnBtnType = (number: number) => void;
export type GoToType = (id: number, callback?: any) => void;
export type ElementPropsType = {post: IPost, ref: AnchorType | null, clickHandler: GoToType};
export type QueryDataType = {data: IPost[], error: unknown, isLoading: boolean};
export type PostsPropsType = {posts: IPost[], anchors: {top: AnchorType, bottom: AnchorType}, buttonHandler: PostsNavigatonType, listCreator: EnlistFnPropsType};

export type EnlistFnPropsType = (posts: IPost[], buttonHandler: PostsNavigatonType) => JSX.Element[];
export type VoidEnlistFnType = (posts: IPost[], anchors: {top: AnchorType, bottom: AnchorType}, buttonHandler: PostsNavigatonType) => void;

export type ListElementPropsType = {post: IPost, ref: AnchorType | null, clickHandler: PostsNavigatonType};
export type ButtonType = ({clickHandler, postId, btnText}:{clickHandler: PostsNavigatonType | ReturnBtnType, postId?: number, btnText: string}) => JSX.Element;
export type PostBodyType = ({body, bodyType}:{body: string, bodyType?: string}) => JSX.Element;
export type PostIdType = ({id}:{id: number}) => JSX.Element;
export type PostTitleType = ({title}:{title: string}) => JSX.Element;
export type PostsType = ({posts, buttonHandler, listCreator}: {posts: IPost[], buttonHandler: PostsNavigatonType, listCreator: EnlistFnPropsType}) => JSX.Element;
export type PostsNavigatonType = (postId: number) => void;
export type setStateFnType = (value: React.SetStateAction<number>) => void;

export interface IPost {
    urerId: number;
    id: number;
    title: string;
    body: string;
};