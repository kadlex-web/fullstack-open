// Header component which takes a name prop and renders it inside a h1 element
const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}
// Content component which takes Parts components and renders them
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1name} exercises={props.part1exercises}/>
      <Part name={props.part2name} exercises={props.part2exercises}/>
      <Part name={props.part3name} exercises={props.part3exercises}/>
    </div>
  )
}
// Part component which takes names and exercises props and renders them inside a p element
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
// Total component which takes exercises props, totals them and then displays the total in a p element
const Total = (props) => {
  return (
    <p>Numbers of exercises {props.value1 + props.value2 + props.value3}</p>
  )
}
// main component which is served to the DOM
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part1name={part1} part1exercises={exercises1} part2name={part2} part2exercises={exercises2} part3name={part3} part3exercises={exercises3}/>
      <Total value1={exercises1} value2={exercises2} value3={exercises3} />
    </div>
  )
}

export default App