import CurvedPicture from "../../components/CurvedPicture";
import Image from "next/image";

const Reasons = () => {
  return (
    <div className="max-w-7xl flex justify-around mx-auto">
      <div>
        <CurvedPicture
          src="https://cdn.7tv.app/emote/612d78ab29ee958c97fe6b91/4x"
          alt="SNIFFA"
        />
      </div>
      <div>
        <div className="text-4xl text-headings font-bold">
          Why you should choose us.
        </div>
        <div>
          <div className="text-black text-opacity-80">
            Creating quality urban lifestyles, building stronger communities
          </div>
          <div className="grid grid-cols-2 justify-between gap-x-48">
            {/* <div className="flex flex-wrap"> */}
            <div className="font-medium">
              <Image
                src="/img/Vectorchecked.svg"
                alt="checked"
                height={16}
                width={16}
              />{" "}
              World class
            </div>
            <div className="font-medium">
              <Image
                src="/img/Vectorchecked.svg"
                alt="checked"
                height={16}
                width={16}
              />{" "}
              Affordable
            </div>
            <div className="font-medium">
              <Image
                src="/img/Vectorchecked.svg"
                alt="checked"
                height={16}
                width={16}
              />{" "}
              Trusted
            </div>
            <div className="font-medium">
              <Image
                src="/img/Vectorchecked.svg"
                alt="checked"
                height={16}
                width={16}
              />{" "}
              Amenities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
