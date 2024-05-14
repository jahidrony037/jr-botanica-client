const ChooseUS = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0 px-1">
      <div className="">
        <img
          src="https://i.ibb.co/GtKtr8R/healthy-food.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div>
          <h2 className="text-[#01693a] font-normal text-[32px] italic text-center md:text-left">
            Why Choose US
          </h2>
          <h2 className="text-[40px] font-bold mt-4 text-center md:text-left">
            Healthy Food is The Key to Your Good Mood
          </h2>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-10 mt-8">
            <div className="border-[2px] border-dashed border-gray-300 rounded-full p-10">
              <img
                src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/icon-2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-bold ">100% Fresh food</p>
              <p className="text-lg font-normal text-justify">
                Botanica Shop is always committed to 100% fresh, organic food
                has a certificate of food safety certification
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-8">
            <div className="border-[2px] border-dashed border-gray-300 rounded-full p-10">
              <img
                src="https://botanica.risingbamboo.com/wp-content/uploads/2023/04/icon-3.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-bold">
                Premium quality food products
              </p>
              <p className="text-lg font-normal text-justify">
                The quality and safety of our products is our top priority. We
                continue to quest for even greater product quality
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-8">
            <div className="border-[2px] border-dashed border-gray-300 rounded-full p-10">
              <img
                src="https://botanica.risingbamboo.com/wp-content/uploads/2023/04/icon-4.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-2xl font-bold">Organic farming</p>
              <p className="text-lg font-normal text-justify">
                Organic farming, agricultural system that uses ecologically
                based pest controls and biological fertilizers derived largely
                from animal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
