import { siteData } from "@/config/siteData";

interface IconItemLi {
  name: string;
  icon: JSX.Element;
}

export function ItemsIconListLi({ items }: { items: IconItemLi[] }) {
  return (
    <>
      <ul className="flex flex-col gap-4 mb-6">
        {items.map((item) => {
          return (
            <li key={item.name} className="flex flex-row gap-2">
              <div className="li-icon flex justify-center w-6">{item.icon}</div>
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
    <>
      <div className="bg-pr-dark-green text-white px-4 py-8">
        <span className="font-semibold">{siteData.amenities.upperText}</span>
        <h2 className="text-2xl font-serif pt-4 pb-2">
          {siteData.amenities.title}
        </h2>
        <div className="line-white bg-white h-[3px] w-20"></div>
        <p className="text-xl py-4 mt-2">{siteData.amenities.description}</p>

        <div className="item-list-container py-4">
          <ItemsIconListLi items={siteData.amenities.items} />
        </div>
      </div>
    </>
  );
}
