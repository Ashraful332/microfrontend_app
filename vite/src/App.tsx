import { Link } from 'react-router'
import './App.css'

function App() {


  return (
    <div className='app-main'>
      <h2>Pages</h2>
      <Link to='/dyna' className='link-page'>Dynamic page</Link>
      <Link to='/moon' className='link-page'>Moon Lander</Link>
    </div>
  )
}

export default App
