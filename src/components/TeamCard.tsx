function TeamCard({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div className="bg-[#161b22] rounded-lg p-6 text-center shadow-lg">
      <img src={img} alt={name} className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-[#00bfa6]" />
      <h3 className="text-xl font-bold text-[#00bfa6]">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  );
}

export default TeamCard;