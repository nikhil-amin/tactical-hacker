function Timeline() {
  const timeline = [
    { year: "2017", event: "Founded Tactical Hacker" },
    { year: "2018", event: "Launched YouTube channel" },
    { year: "2020", event: "Open-sourced first project" },
    { year: "2023", event: "Reached 10k subscribers" },
    { year: "Present", event: "Experimenting & building" },
  ];
  return (
    <ul className="space-y-4">
      {timeline.map((item) => (
        <li key={item.year} className="flex items-center">
          <span className="text-[#00bfa6] font-bold w-24">{item.year}</span>
          <span className="text-gray-300">{item.event}</span>
        </li>
      ))}
    </ul>
  );
}

export default Timeline;