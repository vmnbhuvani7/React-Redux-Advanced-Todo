import React from 'react'
import { useDispatch } from 'react-redux';

import { deletePost } from '../store/actions/managerAction';

const ManagerDetail = (props) => {
    const { post } = props
    const dispatch = useDispatch();

    return (

        <div className="col s12 m6">
            <div className="card ">
                <div className="card-content">
                    <span className="card-title">{post.name}</span>
                    <p>Age:&nbsp; {post.age}</p>
                    <p>Email:&nbsp; {post.email}</p>
                    <p>Type:&nbsp; {post.type}</p>
                </div>
                <div className="card-action">
                    <button className="btn red" onClick={() => dispatch(deletePost(post.id))}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ManagerDetail
