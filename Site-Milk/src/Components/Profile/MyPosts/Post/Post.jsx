import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg' alt='logo' />
         { props.message }
                <div>
                <span>like</span> { props.likesCount }
                </div>
            </div>
    );
}

export default Post;