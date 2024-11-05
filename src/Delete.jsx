 function Delete({ fruitId, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:3000/fruits/${fruitId}`, {
      method: 'DELETE'
    })
    .then(() => {
      onDelete(fruitId)
    })
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
export default Delete
