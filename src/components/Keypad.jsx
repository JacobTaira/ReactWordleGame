import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)
  console.log("USED KEYS: ", usedKeys)

  useEffect(() => {
    fetch('/data/db.json')
      .then(res => res.json())
      .then(json => {
        setLetters(json.letters)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        console.log(usedKeys[l.key])
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}