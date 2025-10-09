function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-[#00bfa6] mb-4">Tactical Hacker</h1>
      <p className="text-xl text-gray-300 mb-6">Creators. Hackers. Experimenters.</p>
      <div className="space-x-4">
        <a href="/about" className="bg-[#00bfa6] text-[#0d1117] px-6 py-2 rounded font-semibold hover:bg-cyan-400 transition">Our Journey</a>
        <a href="https://youtube.com/@tacticalhacker" target="_blank" rel="noopener noreferrer" className="border border-[#00bfa6] text-[#00bfa6] px-6 py-2 rounded font-semibold hover:bg-[#00bfa6] hover:text-[#0d1117] transition">Watch on YouTube</a>
      </div>
    </section>
  );
}

export default Hero;