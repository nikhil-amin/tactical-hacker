import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0d1117] border-b border-[#00bfa6]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-[#00bfa6] font-bold text-xl">Tactical Hacker</span>
        <div className="space-x-4">
          <NavLink to="/" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>Projects</NavLink>
          <NavLink to="/youtube" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>YouTube</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-[#00bfa6]" : "text-white"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;