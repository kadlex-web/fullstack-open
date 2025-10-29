const PersonsList = ({persons}) => {
    return (
      <div>
        {persons.map(person =>
          <Person key={person.id} person={person}/>
        )}
      </div>
    )
}

const Person = (props) => {
  return (
    <div>{props.person.name} {props.person.number}</div>
  )
}


export default PersonsList