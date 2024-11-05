import { useState } from 'react'
import  Display  from './Display'
import  Create  from './Create'


function App() {
  const [fruits, setFruits] = useState([])

  // Fetch data once when component mounts
  if (fruits.length === 0) {
    fetch("http://localhost:3000/fruits")
      .then(response => response.json())
      .then(data => setFruits(data))
  }

  const handleAddFruit = (newFruit) => {
    setFruits([...fruits, newFruit])
  }

  const handleDelete = (fruitId) => {
    setFruits(fruits.filter(fruit => fruit.id !== fruitId))
  }

  return (
    <div>
      <Display fruits={fruits} onDelete={handleDelete} />
      <Create onAddFruit={handleAddFruit} />
     
    </div>
  )
}

export default App
