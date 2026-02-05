const Footer = () => {
  return (
    <footer className="w-full mt-12">
      <div className="container mx-auto flex items-center justify-between p-4 border-t border-gray-300">
        <p className="text-[#1C1C1C]">© 2026 NAGANUMA</p>
        <div className="flex space-x-4">
          <a href="#" className="text-[#1C1C1C] hover:text-[#E53935]">GitHub</a>
          <a href="#" className="text-[#1C1C1C] hover:text-[#E53935]">LinkedIn</a>
          <a href="#" className="text-[#1C1C1C] hover:text-[#E53935]">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
