import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAddPostAction } from '../actions/postActions';

class AddPost extends Component {
    state = {
        title: '',
        body: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.addPost({...this.state});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h4>New Post</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="post-title">Title</label>
                            <input value={this.state.title} id="post-title" name="title" type="text"
                                onChange={this.handleInputChange} className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="post-body">Content</label>
                            <input id="post-body" type="text" name="body"
                                onChange={this.handleInputChange}
                                value={this.state.body} className="validate" />
                        </div>
                    </div>
                    <div>
                        <button className="waves-effect waves-light btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    // 指定挂载的东西. dispatch参数是一个action
    // 通过
    return {
        addPost: (post) => dispatch(createAddPostAction(post)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddPost);