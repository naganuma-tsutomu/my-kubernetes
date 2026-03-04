const Footer = () => {
  return (
    <footer className="w-full mt-12">
      <div className="container mx-auto flex items-center justify-between p-4 border-t border-gray-300">
        <p className="text-[#1C1C1C]">© {new Date().getFullYear()} NAGANUMA</p>
        <div className="flex space-x-4">
          {/* TODO: Update these dummy links with actual URLs once ready */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1C1C1C] hover:text-[#E53935]">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1C1C1C] hover:text-[#E53935]">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1C1C1C] hover:text-[#E53935]">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
