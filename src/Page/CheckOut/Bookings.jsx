import { useContext, useEffect, useState } from "react";
import { AuthContextCurrent } from "../../Context/AuthContext";

const Bookings = () => {
  const { user, loading } = useContext(AuthContextCurrent);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  return (
    <div className="min-h-screen">
      <h4>total Data: {bookings.length}</h4>
    </div>
  );
};

export default Bookings;
