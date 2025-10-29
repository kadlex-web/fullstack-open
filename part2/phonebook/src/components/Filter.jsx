const Filter = ({value, changeFunc}) => {
    return (
        <div>filter shown with 
            <input value={value} onChange={changeFunc}/>
        </div>
    )
}

export default Filter