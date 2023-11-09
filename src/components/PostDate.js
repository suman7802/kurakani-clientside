export default function PostDate({post}) {
  const PostDate = post.editedDate ? post.editedDate : post.createdDate;

  function formatDate(dateString) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  function formatTime(dateString) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  }

  return (
    <span className="CreatedDate">
      {formatDate(PostDate)}
      {formatTime(PostDate)}
    </span>
  );
}
