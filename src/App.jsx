import { useState } from 'react'
import  Display  from './Display'
import  Create  from './Create'


function App() {
  const [fruits, setFruits] = useState([])

  
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
  const handleUpdate = (updatedFruit)=>{
    setFruits(fruits.map((fruit,)=>

        
      fruit.id === updatedFruit.id ? updatedFruit : fruit
        
       
        
    ))

  }

  return (
    <div>
      <Display fruits={fruits} onDelete={handleDelete} onUpdate={handleUpdate}/>
      <Create onAddFruit={handleAddFruit} />
     
    </div>
  )
}

export default App
