import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App" style={{background: '#151515', height: window.innerHeight}}>
      <h1 style={{color:'#FFFFFF'}}>Wordle UNLIMITED</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App