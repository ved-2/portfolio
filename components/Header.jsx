export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-6 py-4 flex items-center justify-between w-[90%] max-w-3xl shadow-md">
      <div className="text-white font-semibold flex items-center gap-2">
        <span className="text-lg">PortFolio</span>
      </div>
      <nav className="flex items-center gap-6 text-sm text-white/80">
        <a href="/" className="hover:text-white transition">
          Home
        </a>
        <a href="/projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="/contact" className="hover:text-white transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
