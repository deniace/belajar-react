import PropTypes from "prop-types";

export default function Actions({ onClearItem, onSortBy }) {
  return (
    <div className="actions">
      <select onChange={(e) => onSortBy(e.target.value)}>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button onClick={onClearItem}>Bersihkan Daftar</button>
    </div>
  );
}

Actions.propTypes = {
  onClearItem: PropTypes.func,
  onSortBy: PropTypes.func,
};
