import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Actions from "./components/Action";
import Form from "./components/Form";
import List from "./components/List";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },

  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(item_id) {
    const newList = items.filter((i) => {
      return i.id != item_id;
    });

    setItems(newList);
  }

  function handleCheckItem(id) {
    const newList = items.map((item) => {
      if (item.id == id) {
        return {
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });

    setItems(newList);
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleSortBy(sortBy) {
    setSortBy(sortBy);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        sortBy={sortBy}
      />
      <Actions onClearItem={handleClearItems} onSortBy={handleSortBy} />
      <Footer items={items} />
    </div>
  );
}
