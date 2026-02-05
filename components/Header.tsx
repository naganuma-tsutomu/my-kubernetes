import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f4e6] shadow-md font-['Oswald']">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-[#1C1C1C]">
          NAGANUMA
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-oswald text-lg">
            <li>
              <Link href="/" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#1C1C1C] hover:text-[#E53935] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
