import CurvedPicture from "../../components/CurvedPicture";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 flex justify-center items-center space-x-10">
      <div className="flex-1 space-y-3">
        <div className="text-4xl text-headings font-medium leading-normal">
          Helping you find the property of your dreams.
        </div>
        <div className="text-xl leading-tight">
          Creating quality urban lifestyles, building stronger communities
        </div>
        <div className="space-x-10">
          <button className="bg-primary text-white p-3 rounded-lg font-bold text-base">
            Learn more
          </button>
          <button className="bg-primary text-white p-3 rounded-full font-bold text-base h-12 w-12">
            {">"}
          </button>
        </div>
      </div>
      <div className="flex-1">
        <CurvedPicture
          src="https://cdn.7tv.app/emote/61576b5c93686fbfe7fbd2e6/4x"
          height="auto"
          width="300px"
          alt="Yelan"
        />
      </div>
    </div>
  );
};

export default Banner;
