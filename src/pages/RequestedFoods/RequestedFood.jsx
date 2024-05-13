import PropType from "prop-types";
import useFormatDate from "./../../hooks/useFormatDate";
const RequestedFood = ({ food, i }) => {
  const { donator_name, pickup_location, expired_date, requested_date } = food;

  return (
    <tr className="hover cursor-pointer">
      <th>{i + 1}</th>
      <td>{donator_name}</td>
      <td>{pickup_location}</td>
      <td>{useFormatDate(expired_date)}</td>
      <td>{useFormatDate(requested_date)}</td>
    </tr>
  );
};

RequestedFood.propTypes = {
  food: PropType.object.isRequired,
  i: PropType.number.isRequired,
};

export default RequestedFood;
