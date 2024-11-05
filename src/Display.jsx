import  Delete  from './Delete'
import Update from './Update'

export function Display({ fruits, onDelete, onUpdate}) {
  return (
    <div className="fruits-grid">
        <h1>FRUITS</h1>
      {fruits.map((fruit, index) => (
        <div key={ index} className="fruit-card">  
          <h2>{fruit.name}</h2>
          <h4>{fruit.color}</h4>
          <h4>{fruit.taste}</h4>
          <Update  fruit={fruit} onUpdate={onUpdate}/>
          <Delete fruitId={fruit.id} onDelete={onDelete} />
        </div>
      ))}
    </div>
  )
}
export default Display