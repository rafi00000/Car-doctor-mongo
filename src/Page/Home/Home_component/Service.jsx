import { useState } from "react";
import { useEffect } from "react";
import Service_Cards from "./Service_Cards";

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="text-center space-y-5 my-20">
      <h3 className="text-xl font-bold text-orange-500 ">Service</h3>
      <h2 className="text-5xl font-semibold ">Our Service Area</h2>
      <p className="md:w-2/3 lg:w-1/2 mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>

      {/* service container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-2xl:grid-cols-4 gap-5">
        {data.map((card) => (
          <Service_Cards key={card._id} card={card}></Service_Cards>
        ))}
      </div>
      <div>
        <button className="btn-primary">Show More</button>
      </div>
    </div>
  );
};

export default Service;
