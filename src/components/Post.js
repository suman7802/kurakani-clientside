import React, {useState} from 'react';
import PostDate from './PostDate';
import Comment from './comment.js';
export default function Post({post}) {
  const [showComment, setShowComment] = useState(false);

  function handleShowComment() {
    setShowComment((prevState) => !prevState);
  }
  console.log(post.comments);
  return (
    <div className="Post">
      <span className="Title">{post.title}</span>
      <PostDate post={post} />
      <span className="Content">{post.content}</span>
      <div className="LikeComment">
        <span>like {post.likes.length}</span>
        <span onClick={handleShowComment}>comment</span>
      </div>
      <ul className="Comments">
        {showComment &&
          post.comments
            .filter((comment) => comment.parentComment === null)
            .map((filteredComment) => (
              <Comment key={filteredComment.id} comment={filteredComment} />
            ))}
      </ul>
    </div>
  );
}
