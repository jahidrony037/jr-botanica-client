import PropType from "prop-types";
import { PiNotePencilLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useFormatDate from "../../hooks/useFormatDate";
const FoodRow = ({ food, i, handleDelete }) => {
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
      <td className="flex gap-5 items-center">
        <Link
          to={`/updateFood/${_id}`}
          // className="btn  rounded-lg hover:bg-[#84d814] bg-[#84d814] text-white"
          data-tooltip-id="update"
          data-tooltip-content="UPDATE"
        >
          <PiNotePencilLight size={30} />
          <Tooltip id="update" style={{ backgroundColor: "#84d814" }} />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          // className="btn btn-error  rounded-lg text-white"
          data-tooltip-id="delete"
          data-tooltip-content="DELETE"
        >
          <RiDeleteBin6Line size={30} />
          <Tooltip id="delete" style={{ backgroundColor: "#84d814" }} />
        </button>
      </td>
    </tr>
  );
};

FoodRow.propTypes = {
  food: PropType.object.isRequired,
  i: PropType.number,
  handleDelete: PropType.func,
};

export default FoodRow;
