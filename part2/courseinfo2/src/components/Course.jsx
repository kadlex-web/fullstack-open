const Course = (props) => {
  return (
    <div>
      {props.course.map(course => {
        return (
        <>
        <Header key={course.id} course={course.name} />
        <Content key={course.id} course={course} />
        <Total key={course.id} course={course}/>
        </>
      )}
    )}
    </div>
  )
}

const Header = (props) => <><h1>{props.course}</h1></>

const Content = (props) => {
  return (
  <div>
    {props.course.parts.map(part => 
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
  console.log(props)
  const total = props.course.parts.reduce(
  	(sum, value) => sum + value.exercises,
  	0,
  	);  
  return (
  <p>Number of exercises {total}</p>
  )
}

export default Course