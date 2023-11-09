import './App.css';
import {data} from './data';
import Post from './components/Post';

export default function App() {
  return (
    <div className="Posts">
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
