import React from 'react';

const Post = (props) => {
    var { p } = props
    return <div className={'mt-2'}>
        <b>{p.title}</b>
        <p>{p.body}</p>
        <div className={'ui hidden divider'}></div>
    </div>
}
export default Post