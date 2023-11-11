import {useState} from 'react';

export default function Comment({comment}) {
  const [showReply, setShowReply] = useState(false);

  function handleShowReply() {
    setShowReply((prevState) => !prevState);
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
