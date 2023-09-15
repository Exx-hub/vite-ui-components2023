import Collapsible from "./Collapsible";

function CollapsiblePage() {
  const locations = [
    {
      title: "Taguig",
      items: [
        { completed: false, name: "Marugame" },
        { completed: false, name: "Raging Bull" },
      ],
    },
    { title: "Manila", items: [{ completed: false, name: "Binondo Foodtrip" }] },
    {
      title: "Antipolo",
      items: [
        { completed: false, name: "The Burrow Cafe" },
        { completed: false, name: "Tahanan Bistro" },
      ],
    },
    {
      title: "Mandaluyong",
      items: [
        { completed: false, name: "CPK" },
        { completed: false, name: "Yakinikulike" },
      ],
    },
  ];

  return (
    <div>
      {locations.map((location) => (
        <Collapsible location={location} key={location.title} />
      ))}
    </div>
  );
}

export default CollapsiblePage;
