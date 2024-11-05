import  Delete  from './Delete'

export function Display({ fruits, onDelete }) {
  return (
    <div className="fruits-grid">
        <h1>FRUITS</h1>
      {fruits.map((fruit, index) => (
        <div key={fruit.id || index} className="fruit-card">  
          <h2>{fruit.name}</h2>
          <h4>{fruit.color}</h4>
          <h3>{fruit.taste}</h3>
          <Delete fruitId={fruit.id} onDelete={onDelete} />
        </div>
      ))}
    </div>
  )
}
export default Display