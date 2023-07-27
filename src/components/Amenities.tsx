/* eslint-disable @next/next/no-img-element */
import { siteData } from "@/config/siteData";

interface IconItemLi {
  name: string;
  icon: JSX.Element;
}

export function ItemsIconListLi({ items }: { items: IconItemLi[] }) {
  return (
    <>
      <ul className="mb-6 flex flex-col gap-4">
        {items.map((item) => {
          return (
            <li key={item.name} className="flex flex-row gap-2">
              <div className="li-icon flex w-6 justify-center">{item.icon}</div>
              <span className="font-sansRoboto">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default function Amenities() {
  return (
    <div className="banner grid 2xl:grid-cols-2 ">
      <div className="banner-image hidden min-h-full 2xl:inline-block">
        <img
          src="/assets/way-to-live.jpg"
          alt=""
          className="h-[100%] object-cover"
        ></img>
      </div>
      <div className="banner-content">
        <div className="bg-pr-dark-green px-4 py-8 text-white 2xl:px-24">
          <span className="font-semibold">{siteData.amenities.upperText}</span>
          <h2 className="pb-2 pt-4 font-serif text-2xl md:text-6xl 2xl:text-7xl">
            {siteData.amenities.title}
          </h2>
          <div className="line-white h-[3px] w-20 bg-white md:my-4 md:w-14"></div>
          <p className="mt-2 py-4 text-xl">{siteData.amenities.description}</p>

          <div className="item-list-container py-4">
            <ItemsIconListLi items={siteData.amenities.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
