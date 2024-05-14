import MenuCard from "./MenuCard";

const OurMenu = () => {
  const items = [
    {
      img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/06/Burger.png",
      title: "Burgers",
      description: "More than 40 different types of fruit.",
    },
    {
      img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/06/vegetable.png",
      title: "Vegetables",
      description: "More than 20 different types of vegetables.",
    },
    {
      img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/06/drink.png",
      title: "Drinks",
      description: " Fruit juices and carbonated soft drinks ",
    },
    {
      img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/06/salmon.png",
      title: "Salmon",
      description: "Get the freshest salmon and ocean trout",
    },
    {
      img: "https://botanica.risingbamboo.com/wp-content/uploads/2022/06/beef.png",
      title: "Beef",
      description: "Get the freshest Beef and mutton",
    },
  ];
  //   console.log(items);
  return (
    <div>
      <h2 className="text-center text-2xl font-bold italic">OUR MENU CARD</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 items-center justify-items-center mt-5">
        {items?.map((item, i) => (
          <MenuCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
