import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default App
