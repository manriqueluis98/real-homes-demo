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
      <div className="p-4 my-4 flex flex-col justify-center items-center">
        <span className=" text-pr-primary font-semibold">- Location</span>
        <h2 className="text-2xl font-serif py-4 text-center">
          All Roads Lead To RealHomes
        </h2>
        <div className="bg-pr-primary h-[3px] w-14"></div>

        {/* TODO: Inser Google Maps API Javascript */}

        <div className="nearby-locations my-8 flex flex-col gap-8">
          {nearbyItems.map((item) => {
            return (
              <div
                className="nearby-item flex flex-col justify-center items-center"
                key={item.name}
              >
                <div className="item-container bg-pr-primary p-3 w-fit rounded-full">
                  {item.icon}
                </div>
                <p className="font-bold">{item.name}</p>
                <span className="font-extralight">{item.distance}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
