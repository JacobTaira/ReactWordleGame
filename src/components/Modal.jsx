import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {
  const handleRefresh = () => {
    window.location.reload(); // This refreshes the page
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses</p>
          <button onClick={handleRefresh} className="ok-button">
           OK
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Womp Womp</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time!</p>
          <button onClick={handleRefresh} className="ok-button">
           OK
          </button>
        </div>
      )}
    </div>
  )
}