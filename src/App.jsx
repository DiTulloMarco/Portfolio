import Topmenu from './Topmenu';
import Aboutme from './Aboutme';
import Blog from './Blog';
import './App.css'

function App() {

  return (
    <div className='flex flex-col'>
      <Topmenu />
      <Aboutme />
      <Blog />
    </div>
  )
}

export default App
