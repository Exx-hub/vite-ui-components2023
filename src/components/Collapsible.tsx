import { useEffect, useRef, useState } from "react";

export interface Item {
  completed: boolean;
  name: string;
}

interface Location {
  title: string;
  items: Item[];
}

interface IProps {
  location: Location;
}

const Collapsible = ({ location }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <>
      <div className="bg-white mb-5">
        <div>
          <div className="p-3 border-b border-gray-500 flex justify-between">
            <h6 className="font-weight-bold">{location.title}</h6>
            <button type="button" className="" onClick={handleFilterOpening}>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          style={{ height }}
          className="overflow-hidden transition-[height] duration-500 ease-in-out"
        >
          <div ref={ref}>
            {isOpen && (
              <div className="p-3">
                {location.items.map((item) => (
                  <p key={item.name}>{item.name}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
