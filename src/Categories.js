import './Menu.css';
import Button from 'react-bootstrap/Button';

export const Categories = ({filterItems, categories}) => {
  return (  
    <div className="container text-center">
      {categories.map((category)=>{
        return <Button
         className='me-2 mb-3' onClick={()=>filterItems(category)}>{category}</Button>
      })}
    </div>
  )
}