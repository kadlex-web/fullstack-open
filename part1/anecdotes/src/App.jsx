import { useState } from 'react'

// Button Component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
// Component which displays number of votes for a given anecdote
const VoteLine = (props) => {
  return (
    <div>has {props.votes} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'If only there was another way to learn programming...'
  ]
  // Pre-populated array with no vote totals based on the length of anecdotes
  const voteArray = Array(anecdotes.length).fill(0, 0)

  // State Hooks for the app
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteArray)
  const [highestVotesIndex, setHighestVotesIndex] = useState(0)

  // Creates a random number between 0 and the length of the anecdotes array and then updates the state to display the anecdote within the array at that index
  const handleSelect = () => {
    const number = Math.floor(Math.random() * anecdotes.length)
    setSelected(number)
  }

  // Creates a copy of the vote array, updates the vote value of the select anecdote and updates the state
  // Function then checks to see what the highest vote total is amongst all anecdotes, and updates the index if it's a new value
  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)

    const highestvoteTotal = Math.max(...copy)
    const indexofhighestVotes = copy.indexOf(highestvoteTotal)
    setHighestVotesIndex(indexofhighestVotes)
  }

  return (
    <>
      <h1> Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <VoteLine votes={votes[selected]} />
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleSelect} />

      <h1>Anecdote with the most votes</h1>
      {anecdotes[highestVotesIndex]}
      <VoteLine votes={votes[highestVotesIndex]} />
    </>
  )
}

export default App