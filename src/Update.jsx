 function Update({ fruit, onUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedFruit = {
      ...fruit,
      color: e.target.color.value,
      taste: e.target.taste.value
    }

    fetch(`http://localhost:3000/fruits/${fruit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFruit)
    })
    .then(response => response.json())
    .then(data => {
      onUpdate(data)
      e.target.reset()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="color"
        placeholder="Update color"
        defaultValue={fruit.color}
        required
      />
      <input 
        type="text"
        name="taste"
        placeholder="Update taste"
        defaultValue={fruit.taste}
        required
      />
      <button type="submit">Update</button>
    </form>
  )
}

export default Update
