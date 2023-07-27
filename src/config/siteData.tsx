const phone = "(800) 543 5432";

export const iconImg = (name: string, alt?: string) => {
  return <img src={`/assets/icons/${name}`}></img>;
};

const hero = {
  title: "Elegance Through Simplicity",
  upperText: "3, 4 & 5 BHK Luxurious Apartment",
  items: [
    {
      name: "Hi-end Furnitures",
      icon: iconImg("image (8).svg"),
    },
    {
      name: "24 Floors",
      icon: iconImg("image (9).svg"),
    },
    {
      name: "Natural Lighting",
      icon: iconImg("image (10).svg"),
    },
  ],
  button: {
    text: "Schedule a Tour",
  },
};

const about = {
  upperText: "- About RealHomes",
  title: "Where Life Becomes Magical",
  description:
    "Nestled in the tranquil lap of Skycity, RealHomes are 4 & 5 BHK luxurious apartments and Duplex and Triplex storeyed, redefining the lifestyle. Being iconic towers in Skycity, this project offers a majestic view of the skyline.",
  stats: [
    {
      number: "120",
      title_1: "Modern units spread",
      title_2: "over twelve floors",
    },
    {
      number: "7.5k",
      title_1: "Square Feet of nature",
      title_2: "around the block",
    },
    {
      number: "60+",
      title_1: "Parking spaces for",
      title_2: "residents and guests",
    },
  ],
};

const amenities = {
  upperText: "- Amenities",
  title: "A New Way to Live",
  description:
    "The RealHomes is a condo in Asheville, NC. The land around it was left untouched, and the surrounding apartments are built from sustainable materials.",
  items: [
    {
      name: "High End Furniture",
      icon: iconImg("image (8).svg"),
    },
    {
      name: "24 Floors",
      icon: iconImg("image (9).svg"),
    },
    {
      name: "Natural Lighting",
      icon: iconImg("image (10).svg"),
    },
    {
      name: "Solar Heating",
      icon: iconImg("image (11).svg"),
    },
    {
      name: "Pet Friendly",
      icon: iconImg("image (12).svg"),
    },
    {
      name: "Hydromassage Bathrooms",
      icon: iconImg("image (13).svg"),
    },
    {
      name: "Low Energy Tools",
      icon: iconImg("image (14).svg"),
    },
    {
      name: "Average size 1,258 Sq Ft",
      icon: iconImg("image (15).svg"),
    },
  ],
};

export const siteData = {
  phone,
  hero,
  about,
  amenities,
};
