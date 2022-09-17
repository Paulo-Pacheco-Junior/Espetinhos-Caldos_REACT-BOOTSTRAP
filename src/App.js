import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { SectionOne } from "./SectionOne";
import { Categories } from "./Categories";
import { Menu } from "./Menu";
import items from './data';


const allCategories = ['Todos', ...new Set(items.map((item)=> item.category))];

const App = () => {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'Todos') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <NavBar />
      <SectionOne />
      <div className="container my-5 text-center">
  	     <h1>Olá amigos!</h1>
  	    <h2>Esse é o nosso Cardápio!</h2>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
