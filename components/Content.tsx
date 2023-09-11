export default function Content() {
  const content = [
    {
      id: 1,
      client: "Ebay",
      title: "Ebay",
      image: "/ebay.png",
      link: "https://player.vimeo.com/video/786295523?h=aa62dcb7c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];
  return (
    <div className=" grid grid-cols-3 gap-6">
      {content.map((item) => (
        <div
          className="group relative flex flex-col items-center"
          key={item.id}
        >
          <div className="relative">
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <div className="flex flex-col items-center justify-center bg-brandBlue bg-opacity-50 p-2 absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">{item.title}</div>
              <div className="text-center text-white">{item.client}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
