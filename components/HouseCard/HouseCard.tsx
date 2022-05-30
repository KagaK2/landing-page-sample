import CurvedPicture from '../CurvedPicture';

interface IHouseCardProps {
    name: string;
    location: string;
    type: string;
    price: string;
    src: string;
    alt: string;
}

const HouseCard = (props: IHouseCardProps) => {
    return (
        <div className="bg-white p-5 ">
            <div>
                <CurvedPicture src={props.src} alt={props.alt} />
            </div>
            <div className="grid grid-cols-2 gap-x-32">
                <div className="text-lg font-medium">{props.name}</div>
                <div>{props.type}</div>
                <div className="text-black text-opacity-80 text-sm">{props.location}</div>
                <div className="text-headings font-bold text-sm">{props.price}</div>
            </div>
        </div>
    )
}

export default HouseCard;