import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pokeball from '../pokeball.png';


class Home extends Component {

    render() {
        // 直接从props中获取，该props中的属性是从redux的store中获取的
        const posts = this.props.posts.map(post => {
            return (
                <div className="card center hoverable" key={post.id}>
                    <img src={pokeball} alt="Pokeball" />
                    <Link to={`/${post.id}`}>
                        <span className="card-title">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            )
        });

        return (
            <div className="posts">
                <div style={{display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'}}>
                    <h2>Posts</h2>
                    <Link to="/addPost" className="btn">Add Post</Link>
                </div>
                {posts}
            </div>
        )
    }
}

// 将store中的state映射成这个component的props中的某些属性
const mapStateToProps = (state /*, ownProps*/) => {
    // 返回一个对象，代表希望在props中访问的属性
    return {
        posts: state.posts
    }
};

export default connect(
    mapStateToProps
)(Home)