import { useEffect, useState } from "react";

export default function List() {
  const [list, setList] = useState(["Albert", "Elon", "Palmer"]);

  function addToList() {
    setList((state) => [...state, "Halland"]);
  } //->  With the "getByText"

  // function addToList () {
  //         const timer = setTimeout(() => {
  //             setList(state => [...state, "Halland"])
  //         }, 1000)
  //         return () => clearTimeout(timer); //-> Clean to avoid memory leak
  //      // With the findByText
  // }

  function removeFromList() {
    setList((state) => state.filter((item) => item != item));
  }

  return (
    <>
      <button onClick={addToList}>Add</button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
