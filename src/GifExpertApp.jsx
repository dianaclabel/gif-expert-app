import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// import React from "react";
// Despues de la version 17 de react ya no es necesario estar importando react a cada uno.

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Valorant"]);
  };

  console.log(categories);
  return (
    <div>
      <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory />
        {/* listado de gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
          {/* <li>ABC</li> */}
        </ol>
        {/* gif item */}
      </>
    </div>
  );
};
