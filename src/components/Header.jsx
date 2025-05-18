import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between bg-neutral-900 border-b border-neutral-800 z-20">
      <Link to="/" className="text-2xl font-bold text-[#eaff00]">SinceraStudio</Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-[#eaff00]">Home</Link>
        <Link to="/blog" className="hover:text-[#eaff00]">Blog</Link>
        {/* Aggiungi altre voci di menu se vuoi */}
      </nav>
    </header>
  );
}