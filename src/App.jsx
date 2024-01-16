import Topmenu from './components/Topmenu';
import Aboutme from './components/Aboutme';
import PostList from './components/PostList';
import Post from './components/Post';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Topmenu />

        <main className="flex-grow ">
          <Routes>
          
            {/* Pagina principale con l'elenco dei post */}
            <Route path="/" exact element={<Home />} />
            
            {/* Pagina dei dettagli del post */}
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

const Home = () => (
  <div className='flex flex-col justify-end'>
    <Aboutme />
    <PostList />
  </div>
)

export default App

