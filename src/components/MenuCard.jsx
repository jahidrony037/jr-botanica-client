import PropType from "prop-types";
const MenuCard = ({ item }) => {
  const { img, title, description } = item;
  return (
    <div className="w-[280px] px-[16px] py-[56px] rounded-[26px] shadow-md space-y-4">
      <div className="pb-[20px]">
        <img src={img} alt="image" className="object-cover mx-auto" />
      </div>
      <p className="text-[16px] hover:text-[#23c052] text-center font-bold">
        {title}
      </p>
      <p>{description}</p>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropType.object.isRequired,
};

export default MenuCard;
