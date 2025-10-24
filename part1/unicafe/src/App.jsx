import { useState } from 'react'

// Button Component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    updateStats(updatedGood, neutral, bad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
    updateStats(good, updatedNeutral, bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    updateStats(good, neutral, updatedBad)
  }
  // Need arguments from handler to ensure that the proper data is rendered, due to asynchronous nature of React
  const updateStats = (x, y, z) => {
    // first portion updates the average state, second part updates the feedback score
    console.log("good:", x, "neutral", y, "bad", z)
    const newTotal = x + y + z
    const scoreTotal = (x * 1) + (z * -1)
    const newAverage = scoreTotal / newTotal
    console.log(newAverage)
    setAverage(newAverage)
    const feedbackScore = (x/newTotal) * 100

    setPositiveFeedback(feedbackScore)
  }
  
  // rendering the webpage
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <h1>statistics</h1>
      <div>good: {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positiveFeedback}%</div>

    </div>
  )
}

export default App