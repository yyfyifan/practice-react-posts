import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createDeletePostAction } from '../actions/postActions';


class Posts extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // 重定向
        this.props.history.push('/');
    }

    render() {
        const content = this.props.post ? (
            <>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.body}</p>
                <div className="post-action right">
                    <button onClick={this.handleClick} className="waves-effect waves-light btn grey darken-2">Delete</button>
                </div>
            </>
        ) : (<p>No such Post</p>);

        return (
            <div>
                {content}
            </div>
        )
    }
}

// ownProps可以直接获取component的props
const mapStateToProps = (state, ownProps) => {
    // 要注意从 pathvariable获取的是string
    const pid = Number(ownProps.match.params.pid);
    // 返回要映射到component的props中的内容
    return {
        post: state.posts.find((post) => post.id === pid)
    }
};

// 用于将dispatch的函数放置在component中的props中
const mapDispatchToProps = (dispatch) => {
    // 指定挂载的东西
    return {
        deletePost: (id) => dispatch(createDeletePostAction(id)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);