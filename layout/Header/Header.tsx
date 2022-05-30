const Header = () => {
  return (
    <nav className="bg-white border-b-2 border-b-neutral-c4">
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative flex items-center justify-between h-24">
          <div className="flex-1 flex items-center justify-center sm:justify-between h-24">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl h-8 w-auto font-title">Dee's Estate</div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-11 justify-between">
                <a className="font-bold text-headings" href="#">Home</a>
                <a href="#">Rent</a>
                <a href="#">Land</a>
                <a href="#">Agent</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <button className="bg-primary text-white p-3 rounded-lg font-bold text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
