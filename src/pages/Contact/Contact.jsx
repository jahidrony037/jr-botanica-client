import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="mt-10 px-2 md:px-0"
    >
      <Helmet>
        <title>JR-Botanica | Contact</title>
      </Helmet>
      <div className="bg-[url('https://sexyfitvegan.com/wp-content/uploads/2014/01/bigstock-Healthy-Eating-20502122.jpg')] bg-no-repeat bg-center bg-cover h-[570px] md:h-[700px] grid grid-cols-12 md:pl-4 rounded-3xl text-white">
        <div className="md:col-span-5 col-span-12 space-y-8">
          <h2 className="lg:text-4xl text-2xl font-medium pb-2 text-center md:text-left md:pt-10 pt-2">
            Get your Foods
          </h2>
          <p>
            Get in touch with us and our experts and developers would love to
            contribute their expertise and insights and help you today.
          </p>
          <div className="space-y-5">
            <div className="flex gap-5 ">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs focus:outline-none focus:border-[#84d814]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs focus:outline-none focus:border-[#84d814]"
              />
            </div>
            <div className="flex gap-5">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs focus:outline-none focus:border-[#84d814]"
              />
              <input
                type="number"
                placeholder="Mobile"
                className="input input-bordered w-full max-w-xs focus:outline-none focus:border-[#84d814]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                className="textarea textarea-bordered textarea-lg w-full focus:outline-none focus:border-[#84d814]"
              ></textarea>
            </div>
            <div>
              <button className="px-5 py-2 w-[217px] relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#84d814] inline-block border-[1px] border-[#84d814]">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white font-bold">
                  Send Email
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 col-span-0"></div>
      </div>
    </div>
  );
};

export default Contact;
