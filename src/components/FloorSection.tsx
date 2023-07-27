import ProductShowcaseHover from "./ui/ProductShowcaseHover";

export default function FloorSection() {
  const floorsData = [
    {
      imageUrl: "/assets/apartment-01.jpg",
      title: "Three Bedrooms",
      subtitle: "From $2,10,000",
      buttonText: "View Floor Plan",
    },
    {
      imageUrl: "/assets/apartment-02.jpg",
      title: "Four Bedrooms",
      subtitle: "From $2,90,000",
      buttonText: "View Floor Plan",
    },
    {
      imageUrl: "/assets/apartment-03.jpg",
      title: "Five Bedrooms",
      subtitle: "From $3,70,000",
      buttonText: "View Floor Plan",
    },
  ];

  return (
    <div className="my-4 p-4 2xl:p-0">
      <div className="wrapper md:mb-16 md:mt-8 md:flex md:flex-row md:items-center md:gap-16 2xl:mx-24">
        <div className="title-container">
          <span className=" font-semibold text-pr-primary">- Floor Plans</span>
          <h2 className="py-4 font-serif text-2xl md:text-5xl 2xl:max-w-xl 2xl:text-6xl">
            Check Real Homes Apartments
          </h2>
          <div className="h-[3px] w-14 bg-pr-primary"></div>
        </div>

        <div className="description-container">
          <p className="pb-2 pt-4 text-xl  md:text-2xl 2xl:max-w-2xl">
            The Real Homes is a home buyers dream. Its a condo in the nature,
            with beautiful views, lots of trees and plants, and a few big rocks
            here and there.
          </p>
        </div>
      </div>

      <div className="floors-container md:grid md:grid-cols-2 2xl:grid-cols-3">
        {floorsData.map((floor, idx) => (
          <ProductShowcaseHover
            key={idx}
            product={floor}
          ></ProductShowcaseHover>
        ))}
      </div>
    </div>
  );
}
