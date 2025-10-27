const Course = (props) => {
  console.log('init props', props.course.parts)
  return (
    <>
    <Header course={props.course.name}/>
    <Content course={props.course.parts} />
    </>
  )
}


const Header = (props) => <><h1>{props.course}</h1></>

const Content = (props) => {
  // console.log('before assignment', props.course)
  return (
  <div>
    {props.course.map(part => 
      <Part key={part.id} part={part}/>
    )}
  </div> 
  )
}

const Part = (props) => {
  const name = props.part.name
  const exercises = props.part.exercises
  return (
  <p>
    {name} {exercises}
  </p>
  )
}

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'State of a component 2',
        exercises: 14,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App