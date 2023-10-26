import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css"


export const PostDetail = ({post}) =>{

    return <div className={styles.post_detail}>
        <img src={post.URLimage} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>

        <div className={styles.tags}>
        {post.tags.map((tag) =>(
            <p key={tag}><span>#</span>{tag}</p>
        ))}

        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>

    </div>


}

