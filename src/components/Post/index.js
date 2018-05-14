import React, { Component } from 'react';
import "./Post.css";

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;

        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={avatar} alt={nickname} />
                        </div>
                        <div className="Post-user-nickname">
                            <span>{nickname}</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img src={image} alt={caption} />
                    </div>
                </div>
                <div className="Post-caption">
                    <div className="Post-user-nickname">
                        <strong>{nickname}</strong>
                    </div>
                    {caption}
                </div>
            </article>
        );
    }
}

export default Post;