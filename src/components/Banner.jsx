import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "./Banner.css";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        {/* <AwesomeSlider
          autoPlay={true}
          animation="cubeAnimation"
          organicArrows={"true"}
          interval={3000}
          cancelOnInteraction={false}
        > */}
        <div className="bg-[#e6f4f2] flex items-center  h-full w-full px-2">
          <div className="space-y-6 lg:pl-32 md:pl-20">
            <p className="text-sm text-red-600 font-semibold">CHEF’S SPECIAL</p>
            <h2 className="lg:text-[55px] md:text-[40px] text-xl font-bold leading-snug">
              Freshness <br />
              in every bite
            </h2>
            <p className="lg:text-[16px] text-xs md:w-[80%] lg:leading-7">
              Good slogens for food delivery business are the key to attractive
              the more customers and earn money and especially food
            </p>
          </div>
          <div>
            <img
              src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/slide2-1.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="bg-[#fcfed9] flex items-center  h-full w-full px-2">
          <div className="space-y-6 lg:pl-32 md:pl-20">
            <p className="text-sm text-red-600 font-semibold">DRINK WITH US</p>
            <h2 className="lg:text-[55px] md:text-[40px] text-xl font-bold leading-snug">
              Organic Raw <br />
              Fruit Smoothies
            </h2>
            <p className="lg:text-[16px] text-xs md:w-[80%] lg:leading-7">
              Choice of Tropical Delight, Creamy Strawberry, Pineapple Island,
              Blueberry Bliss, Organic Green Kale, Mango, Banana Mango
            </p>
          </div>
          <div>
            <img
              src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/Smoothie.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="bg-[#fee3ba] flex items-center  h-full w-full px-2">
          <div className="space-y-6 lg:pl-32 md:pl-20">
            <p className="text-sm text-red-600 font-semibold">DRINK WITH US</p>
            <h2 className="lg:text-[55px] md:text-[40px] text-xl font-bold leading-snug">
              Vietnamese <br />
              Sandwich
            </h2>
            <p className="lg:text-[16px] text-xs md:w-[80%] lg:leading-7">
              Vietnamese sandwich is made with meat, pate, fried egg and full of
              pickled vegetables. One of the most vibrant and delicious
              sandwiches in the world
            </p>
          </div>
          <div>
            <img
              src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/bread.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
        </div>
        {/* </AwesomeSlider> */}
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
