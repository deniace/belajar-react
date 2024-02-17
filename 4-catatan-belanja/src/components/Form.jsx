import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ onAddItem }) {
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

Form.propTypes = {
  onAddItem: PropTypes.func,
};
