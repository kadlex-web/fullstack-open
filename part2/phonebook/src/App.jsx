import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import AxiosHelper from './components/AxiosHelper'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPhrase, setFilterPhrase] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  // Effect hook to fetch json data from local db and generate initial list within the App for displaying
  useEffect(() => {
    AxiosHelper
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

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
      }
      // Generate a Post request and send to the URL containing the person Object payload. Then take the data sent and update the persons State
      AxiosHelper
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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