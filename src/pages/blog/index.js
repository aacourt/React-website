import React, { Component } from 'react';
import './styles.css';

class Blog extends Component {
  render() {
    return (
      <div className="BlogPage">
        <div className="LeftBlogPanel">
          <h1>Posts</h1>
        </div>
        <div className="RightBlogPanel">
          <h1>Side Panel</h1>
        </div>
      </div>
    );
  }
}

export default Blog;