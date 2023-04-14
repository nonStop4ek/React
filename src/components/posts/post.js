import React from 'react';

const Post = ({post, setPost}) => {
    const {id,title}=post
    return (
        <div>



                       <p> id:{id}</p>
                       <p> title:{title}</p>
                        <button onClick={()=>setPost(post)}>details</button>

        </div>
    );
};

export default Post;