import PropTypes from "prop-types";

export default function ListItem({ item, onDeleteItem, onCheckItem }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onCheckItem(item.id)}
        checked={item.checked}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object,
  onDeleteItem: PropTypes.func,
  onCheckItem: PropTypes.func,
};
