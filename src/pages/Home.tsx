import logo from "../assets/th-logo.png";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white">
      <img
        src={logo}
        alt="Tactical Hacker Logo"
        className="w-24 h-24 mb-6 rounded-full border-2 border-[#00bfa6] shadow-[0_0_12px_#00bfa6]"
      />
      <h1 className="text-4xl font-bold">Welcome to Tactical Hacker</h1>
      <p className="mt-4 text-lg text-gray-300">Initializing Tactical Mode...</p>
      <div className="mt-10 flex justify-center w-full">
        <blockquote className="italic text-lg text-[#00bfa6] px-6 py-4 rounded-xl border border-[#00bfa6] shadow-[0_0_12px_#00bfa6] bg-[#161b22] max-w-xl text-center">
          “We believe in learning by building. Every idea deserves a prototype.”
        </blockquote>
      </div>
    </div>
  );
}

export default Home;