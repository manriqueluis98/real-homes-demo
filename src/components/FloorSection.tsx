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
    <div className="p-4 my-4">
      <div className="wrapper md:flex md:flex-row md:mt-8 md:mb-16 md:items-center md:gap-16">
        <div className="title-container">
          <span className=" text-pr-primary font-semibold">- Floor Plans</span>
          <h2 className="text-2xl md:text-5xl font-serif py-4">
            Check Real Homes Apartments
          </h2>
          <div className="bg-pr-primary h-[3px] w-14"></div>
        </div>

        <div className="description-container">
          <p className="text-xl pb-2 pt-4  md:text-2xl">
            The Real Homes is a home buyers dream. Its a condo in the nature,
            with beautiful views, lots of trees and plants, and a few big rocks
            here and there.
          </p>
        </div>
      </div>

      <div className="floors-container md:grid md:grid-cols-2">
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
