import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [ search, setSearch] = useState("")

  useEffect(()=>{
    // code to be executed
    fetch("http://localhost:4000/posts")
    .then(res => res.json())
    .then(data => setPosts(data))

  }, []
  // dependency array
)


  return (
    <div>
      <Navbar />
      <PostList posts={posts}/>
    </div>
    
    
  );
}

export default App;
