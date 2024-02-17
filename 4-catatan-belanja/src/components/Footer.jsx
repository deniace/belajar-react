import PropTypes from "prop-types";

export default function Footer({ items }) {
  let message = "Daftar Belanjaan masih kosong";
  if (items.length > 0) {
    const itemCount = items.length;
    const checkedItemCount = items.filter((item) => item.checked).length;
    const percentage = (checkedItemCount / itemCount) * 100;

    message = `Ada ${itemCount} barang di daftar belanjaan, ${checkedItemCount} barang
      sudah dibeli (${percentage.toFixed(2)}%)`;
  }

  return <footer className="stats">{message}</footer>;
}

Footer.propTypes = {
  items: PropTypes.array,
};
