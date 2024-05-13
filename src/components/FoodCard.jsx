import PropType from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  //   console.log(food);
  const {
    photo_url,
    food_name,
    donator_image,
    donator_name,
    food_quantity,
    pickup_location,
    expired_date,
    notes,
    _id,
  } = food;
  const date = new Date(expired_date);
  //   console.log(donator_img);
  return (
    <div className="shadow-lg p-5 rounded-xl w-full">
      <div className="flex flex-col  items-stretch justify-center">
        <div className="h-[500px]">
          <div className="donator information flex gap-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={donator_image} alt="donator image" />
              </div>
            </div>
            <p className="text-xl">Donor Name: {donator_name}</p>
          </div>
          <div className="border-[1px] border-solid my-4"></div>
          <div className="food information mt-3">
            <div className="flex justify-center bg-base-200 p-5 rounded-xl h-[220px]">
              <img
                src={photo_url}
                className="rounded object-cover"
                alt="food_image"
              />
            </div>
            <p className="text-center font-bold mt-3">{food_name}</p>
            <ul>
              <li>Quantity: {food_quantity}</li>
              <li>Location: {pickup_location}</li>
              <li>Expire Date: {date.toISOString().split("T")[0]}</li>
              <li>
                Notes:
                {notes.length > 50
                  ? `${notes.substring(0, 50)} more......`
                  : notes}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[20px]">
          <Link to={`/availableFood/${_id}`} className="btn w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropType.object.isRequired,
};

export default FoodCard;
