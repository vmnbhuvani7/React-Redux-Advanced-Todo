import React from 'react'
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import ManagerDetail from './ManagerDetail';

const ManagerList = (props) => {
    let { posts } = useSelector(state => state.manager)
    // const posts = JSON.parse(localStorage.getItem('testObject'))
    return (
        <div className="container">
            <div className="row">
                <HomePage />
                {posts &&
                    posts.map((post) =>
                        <ManagerDetail post={post} key={post.id} myProps={props} />
                    )}
            </div>
        </div>
    )
}

export default ManagerList
