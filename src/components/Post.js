import React, {useState} from 'react';
import PostDate from './PostDate';

export default function Post({post}) {
  const [showComment, setShowComment] = useState(false);

  function handleShowComment() {
    setShowComment(!showComment);
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
          post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </ul>
    </div>
  );
}

function Comment({comment}) {
  const [showReply, setShowReply] = useState(false);

  function handleShowReply() {
    setShowReply(!showReply);
  }

  return (
    <div className="Comment">
      <div onClick={handleShowReply}>{comment.comment}</div>
      {showReply && comment.childComments.length > 0 && (
        <ul className="Replies">
          {comment.childComments.map((reply) => (
            <li key={reply.id} className="Reply">
              <Comment comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
