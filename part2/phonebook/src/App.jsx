import { useState } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPhrase, setFilterPhrase] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const addPerson = (event) => {
    event.preventDefault()
    //need to check if name already exists in the phone book before creating the object
    // create an array of names using map function
    const names = persons.map(person => person.name)
    
    //check if name is within names list
    if (names.includes(newName)) {
      // if it is, prompt an alert message and don't add the name
      alert(`${newName} is already in phone book!`)
    }
      // otherwise, add the new person
    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: newName + persons.length
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      }
  }
  // declare a conditional statement which is used to generate filtered views
  const peopleToShow = showAll 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterPhrase))

  const handleNameChange = (event) => {
    // on submit, the newName value is updated to the submitted value
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // on submit, the newNumber value is updated to the submitted value
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterPhrase(event.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterPhrase} changeFunc={handleFilter}/>
      <h3>add a new</h3>
      <AddPersonForm submitFunc={addPerson} nameValue={newName} numValue={newNumber} nameChangeFunc={handleNameChange} numChangeFunc={handleNumberChange}/>
      <h3>Numbers</h3>
      <PersonsList persons={peopleToShow} />
    </div>
  )
}

export default App