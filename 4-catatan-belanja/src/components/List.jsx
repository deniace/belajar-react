import PropTypes from "prop-types";
import ListItem from "./ListItem";

export default function List({ items, onDeleteItem, onCheckItem, sortBy }) {
  let newList = [];
  switch (sortBy) {
    case "name":
      newList = items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      newList = items.sort((a, b) => a.checked - b.checked);
      break;
    default:
      newList = items.sort((a, b) => a.id - b.id);
      break;
  }

  return (
    <div className="list">
      <ul>
        {newList.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onCheckItem={onCheckItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onCheckItem: PropTypes.func,
  sortBy: PropTypes.string,
};
