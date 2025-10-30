import DeleteButton from './DeleteButton'
// Renders a list of people 
const PersonsList = ({persons}) => {
    return (
      <div>
        {persons.map(person =>
          <Person key={person.id} person={person}/>
        )}
      </div>
    )
}

// Render a person component followed by a delete button
const Person = (props) => {
  return (
    <div>
    {props.person.name} {props.person.number} <DeleteButton name={props.person.name} id={props.person.id}/>
    </div>
  )
}

export default PersonsList