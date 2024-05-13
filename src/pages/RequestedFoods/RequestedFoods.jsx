import useAuth from "../../hooks/useAuth";
import useFoods from "../../hooks/useFoods";
import RequestedFood from "./RequestedFood";

const RequestedFoods = () => {
  const { user } = useAuth();
  const url = `requestedFoods?email=${user?.email}`;
  const { foods, isPending, error } = useFoods(url);
  console.log(foods, isPending, error);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10">
        My Requested Food List
      </h2>
      <div className="mt-[50px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 2 */}
              {foods?.map((food, i) => (
                <RequestedFood key={food._id} i={i} food={food} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestedFoods;
