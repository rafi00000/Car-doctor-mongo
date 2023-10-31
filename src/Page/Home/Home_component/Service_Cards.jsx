import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Service_Cards = ({ card }) => {
  console.log(card);
  const { title, img, price, _id } = card;

  return (
    <div className="p-5 border rounded-xl flex flex-col justify-between">
      <img src={img} alt="" className="w-full rounded-lg h-2/3 " />
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex justify-between items-center">
        <h4 className="text-xl text-orange-500 font-bold">Price: ${price}</h4>
        <Link to={`/checkout/${_id}`}>
          <FaArrowRight className="text-orange-500 cursor-pointer"></FaArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default Service_Cards;
