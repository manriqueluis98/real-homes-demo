import {
  FaBook,
  FaBus,
  FaFilm,
  FaHospital,
  FaPlaneDeparture,
  FaSchool,
  FaTrain,
  FaUniversity,
} from "react-icons/fa";

const nearbyItems = [
  {
    name: "Airport",
    icon: <FaPlaneDeparture color={"white"} size={28} />,
    distance: "12.5KM",
  },
  {
    name: "Bus Stand",
    icon: <FaBus color={"white"} size={28} />,
    distance: "6.8KM",
  },
  {
    name: "School",
    icon: <FaSchool color={"white"} size={28} />,
    distance: "2.4KM",
  },
  {
    name: "Bank",
    icon: <FaUniversity color={"white"} size={28} />,
    distance: "1.8KM",
  },
  {
    name: "Library",
    icon: <FaBook color={"white"} size={28} />,
    distance: "0.5KM",
  },
  {
    name: "Hospital",
    icon: <FaHospital color={"white"} size={28} />,
    distance: "1.1KM",
  },
  {
    name: "Cinema",
    icon: <FaFilm color={"white"} size={28} />,
    distance: "2.5KM",
  },
  {
    name: "Metro Station",
    icon: <FaTrain color={"white"} size={28} />,
    distance: "1.8KM",
  },
];

export default function LocationSection() {
  return (
    <>
      <div className="my-4 flex flex-col items-center justify-center p-4">
        <span className=" font-semibold text-pr-primary">- Location</span>
        <h2 className="py-4 text-center font-serif text-2xl md:text-5xl">
          All Roads Lead To RealHomes
        </h2>
        <div className="h-[3px] w-14 bg-pr-primary"></div>

        {/* TODO: Inser Google Maps API Javascript */}

        <div className="nearby-locations my-8 flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-48 lg:gap-x-80 2xl:mx-12 2xl:grid-cols-4 2xl:gap-x-40 2xl:gap-y-12">
          {nearbyItems.map((item) => {
            return (
              <div
                className="nearby-item flex flex-col items-center justify-center md:flex-row md:justify-start  md:gap-4 "
                key={item.name}
              >
                <div className="item-container w-fit rounded-full bg-pr-primary p-3 3xl:p-4">
                  {item.icon}
                </div>
                <div className="text-container">
                  <p className="font-bold">{item.name}</p>
                  <span className="font-extralight">{item.distance}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
