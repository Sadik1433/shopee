import display5 from "./Assets/display_5.png";

export default function About() {
  return (
    <section className="h-screen bg-sky-100 px-6 py-5 flex" id="about">
      <div className="flex max-w-6xl  w-full ">
        <div className="w-[400px]">
          <img src={display5} className="" alt="" />
        </div>
        <div className="flex flex-col gap-9">
           <div className="">
            <h2 className="text-4xl text-center font-bold text-blue-800 mb-9">About Shopee</h2>
            <p className="text-blue-600 text-center mt-3 max-w-2xl mx-auto">
              We are a modern e-commerce platform bringing you quality products,
              trending collections, and a seamless shopping experience.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Who We Are
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Shopee is a customer-focused e-commerce platform dedicated to
              delivering stylish and affordable products for everyone.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              What We Offer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From fashion and accessories to trending collections, we curate
              products that match your lifestyle and budget.
            </p>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Why Choose Us
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Easy shopping, secure payments, fast delivery, and dedicated
              support make us a trusted choice for online shoppers.
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our vision is to become a one-stop destination for quality
              products while delivering exceptional customer experiences.
            </p>
          </div>
      </div>
      </div>
    </section>
  );
}
