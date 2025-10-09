function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#00bfa6] py-4 text-center text-gray-400">
      <div>
        <a href="https://github.com/tacticalhacker" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#00bfa6]">GitHub</a>
        <a href="https://youtube.com/@tacticalhacker" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-[#00bfa6]">YouTube</a>
      </div>
      <div className="mt-2">&copy; {new Date().getFullYear()} Tactical Hacker</div>
    </footer>
  );
}

export default Footer;