function VideoCard({ title, thumbnail, url }: { title: string; thumbnail: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#161b22] rounded-lg p-4 mb-4 hover:border-[#00bfa6] border border-transparent transition"
    >
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover rounded mb-2" />
      <h4 className="text-md font-bold text-[#00bfa6]">{title}</h4>
    </a>
  );
}

export default VideoCard;