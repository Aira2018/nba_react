import React from 'react';

const PostData = (props) => {
    return (
        <div className='article-post-data'>
            <div>
                Date :
                <strong>{props.data.date}</strong>
            </div>
            <div>
                Author :
                <strong>{props.data.author}</strong>
            </div>
            
        </div>
    );
};

export default PostData;