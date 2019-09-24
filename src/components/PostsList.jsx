import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
    return (
        <div className="h-100 py-2">
            {
                posts.map(post => <Post post={post} key={post.url} />)
            }
        </div>
    );
};

export default PostsList;
