import { useState } from 'react'

// Button Component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  // Seems a bit obtuse but it does work to get the % in the right spot
  if (text == "positive") {
    return (
     <tbody>
      <tr>
        <th scope="row">{text}</th>
        <td>{value} %</td>
      </tr>
    </tbody>     
    )
  }
  // nothing else needs a % sign
  return (
    <tbody>
      <tr>
        <th scope="row">{text}</th>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}
// Statistics Component
const Statistics = ({good, neutral, bad, total, average, positiveFeedback}) => {
  if (total == 0) {
    return (
      <>
      <h1>statistics</h1>
      <div>No feedback given</div>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positiveFeedback} />
    </table>
    </>
  )
}

const App = () => {
  // All states within the app
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)
  // Handler for good feedback button. Updates with every click
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    updateStats(updatedGood, neutral, bad)
  }
  // Handler for neutral feedback button. Updates with every click
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
    updateStats(good, updatedNeutral, bad)
  }
  // Handler for bad feedback button. Updates with every click
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
    updateStats(good, neutral, updatedBad)
  }
  // Need arguments from handler to ensure that the proper data is rendered, due to asynchronous nature of React
  const updateStats = (g, n, b) => {
    // first portion updates the average state, second part updates the feedback score
    const newTotal = g + n + b
    const scoreTotal = (g * 1) + (b * -1)
    const newAverage = scoreTotal / newTotal
    setAverage(newAverage)
    const feedbackScore = (g/newTotal) * 100

    setPositiveFeedback(feedbackScore)
  }
  
  // rendering the webpage
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positiveFeedback={positiveFeedback}/>
    </div>
  )
}

export default App