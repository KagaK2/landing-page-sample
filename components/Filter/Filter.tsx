const Filter = () => {
  return (
    <div className="w-8/12 h-32 bg-white rounded-3xl flex items-center justify-around px-8 mx-auto">
      <div>
        <button className="text-headings font-bold">
          Location<i className="fa fa-caret-down"></i>
        </button>
        <div className="text-black text-opacity-50">Lekki</div>
      </div>
      <div>
        <button className="text-headings font-bold">
          Property Type<i className="fa fa-caret-down"></i>
        </button>
        <div className="text-black text-opacity-50">Duplex</div>
      </div>
      <div>
        <button className="text-headings font-bold">
          Max Price<i className="fa fa-caret-down"></i>
        </button>
        <div className="text-black text-opacity-50">$20,000</div>
      </div>
      <div>
        <button className="bg-primary text-white p-3 rounded-lg font-bold text-base">
          <i className="fa fa-search" aria-hidden="true"></i> Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
