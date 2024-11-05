 function Create({ onAddFruit }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const newFruit = {
      name: e.target.name.value,
      color: e.target.color.value,
      taste: e.target.taste.value
    }

    fetch('http://localhost:3000/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFruit)
    })
    .then(response => response.json())
    .then(data => {
      onAddFruit(data)
      e.target.reset()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        placeholder="Enter fruit name"
        required
      />
      <input 
        type="text"
        name="color"
        placeholder="Enter color"
        required
      />
      <input 
        type="text"
        name="taste"
        placeholder="Enter taste"
        required
      />
      <button type="submit">Add Fruit</button>
    </form>
  )
}

export default Create
