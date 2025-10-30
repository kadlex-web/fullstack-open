import AxiosHelper from "./AxiosHelper"

const DeleteButton = (name, id) => {
    return (
        <>
            <button type="button" onClick={() => removePerson(name, id)}>delete</button>
        </>
    )
}

const removePerson = ({name, id}) => {
  if (window.confirm(`Are you sure you want to delete ${name}?`)) {
    AxiosHelper
    .remove(id)
  }
  else {
    alert('ok, we can keep them for now')
  }
}

export default DeleteButton