import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    handleOnClick = () => {
        this.setState((state) => {
            return { isVisible: !state.isVisible };
        });
    }

    render() {
        const { post } = this.props;
        const { isVisible } = this.state;
        return (
            <div className="post-card">
                <h5>{post.title}</h5>
                <button type="button" className="btn" onClick={this.handleOnClick}>{isVisible ? "hide" : "show"}</button>
                {
                    isVisible && (
                        <p>{post.content}</p>
                    )}
            </div>
        );
    }
}

export default Post;
