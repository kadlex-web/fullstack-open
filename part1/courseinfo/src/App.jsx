// Header component which takes a name prop and renders it inside a h1 element
const Header = (props) => {
  return (
    <>
      <h1>{props.name.name}</h1>
    </>
  )
}
// Content component which takes Parts components and renders them
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises}/>
      <Part name={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises}/>
      <Part name={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises}/>
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
    <p>Numbers of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
  )
}
// main component which is served to the DOM
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  }

  return (
    <div>
      <Header name={course}/>
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  )
}

export default App
