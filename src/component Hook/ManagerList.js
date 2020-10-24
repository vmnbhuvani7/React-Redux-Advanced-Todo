import React from 'react'
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import ManagerDetail from './ManagerDetail';

const ManagerList = () => {
    const { posts } = useSelector(state => state)

    return (
        <div className="container">
            <div className="row">
                <HomePage />
                {posts &&
                    posts.map((post) =>
                        <ManagerDetail post={post} key={post.id} />
                    )}
            </div>
        </div>
    )
}

export default ManagerList
