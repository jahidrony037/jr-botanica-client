import useAuth from "../../hooks/useAuth";
import useFoods from "../../hooks/useFoods";
import RequestedFood from "./RequestedFood";

const RequestedFoods = () => {
  const { user } = useAuth();
  const url = `requestedFoods?email=${user?.email}`;
  const { foods } = useFoods(url);
  //   console.log(foods, isPending, error);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">
        My Requested Food List
      </h2>
      <div className="mt-[50px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Food Name</th>
                <th>Donar Name</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
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
