import { Landing } from './pages/Landing'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import { Introduction } from './pages/Introduction'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Introduction />
    </>
  )
}

export default App;
