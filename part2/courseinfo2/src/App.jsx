const Course = (props) => {
  console.log(props.course)
  return (
    <div>
      {props.course.map(course => 
        <Header key={course.id} course={course.name} />
      )}
      {props.course.map(course =>
        <Content key={course.id} course={course} />
      )}
    </div>
  )
}

const Header = (props) => <><h1>{props.course}</h1></>

const Content = (props) => {
  console.log('content props', props)
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

const Total = (props) => {
  const total = props.parts.reduce(
  	(sum, value) => sum + value.exercises,
  	0,
  	);  
  return (
  <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}

export default App
