import { useEffect, useState } from "react";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <List items={items} />
      <Actions />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>;
}

function Footer() {
  return (
    <footer className="stats">
      Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
    </footer>
  );
}

function Actions() {
  return (
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
  );
}

function Form({ onAddItem }) {
  const quantityNum = [...Array(20)].map((_, i) => {
    return (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    );
  });

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if ("" === name) {
      return;
    }
    const newItem = {
      name: name,
      quantity: quantity,
      checked: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}

function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <ListItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              checked={item.checked}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ListItem({ name, quantity, checked }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={checked ? { textDecoration: "line-through" } : {}}>
        {quantity} {name}
      </span>
      <button>&times;</button>
    </li>
  );
}

{
  /* <li>
            <input type="checkbox" checked={true} />
            <span style="text-decoration: line-through;">1 Kopi</span>
            <button>&times;</button>
          </li> */
}
