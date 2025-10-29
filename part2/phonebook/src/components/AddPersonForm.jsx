const AddPersonForm = ({submitFunc, nameValue, nameChangeFunc, numChangeFunc, numValue,}) => {
    return (
      <form onSubmit={submitFunc}>
          <div>name: <input value={nameValue} onChange={nameChangeFunc} /></div>
          <div>number: <input value={numValue} onChange={numChangeFunc}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPersonForm