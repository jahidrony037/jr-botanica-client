import PropType from "prop-types";
import useFormatDate from "../../hooks/useFormatDate";
const FoodRow = ({ food, i, handleUpdate, handleDelete }) => {
  const { donator_name, food_quantity, food_name, expired_date, _id } =
    food || {};
  //console.log(food);
  return (
    <tr className="hover cursor-pointer">
      <th>{i + 1}</th>
      <td>{food_name}</td>
      <td>{food_quantity}</td>
      <td>{donator_name}</td>
      <td>{useFormatDate(expired_date)}</td>
      <td className="flex gap-5">
        <button
          onClick={() => handleUpdate()}
          className="btn  rounded-lg hover:bg-[#84d814] bg-[#84d814] text-white"
        >
          update
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error  rounded-lg text-white"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

FoodRow.propTypes = {
  food: PropType.object.isRequired,
  i: PropType.number,
  handleUpdate: PropType.func,
  handleDelete: PropType.func,
};

export default FoodRow;
