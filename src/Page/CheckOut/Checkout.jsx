import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContextCurrent } from "../../Context/AuthContext";
import axios from "axios";


const Checkout = () => {
    const itemLoaderData = useLoaderData();
    const { _id, title, price, img}  = itemLoaderData;
    const {user} = useContext(AuthContextCurrent);

    const handleBookService = e =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;

        const checkoutData = {name, date, email, price, title, img} ;
        console.log(checkoutData);
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <div className="bg-slate-300 rounded-md my-5 flex justify-center md:p-10">
            <form className="w-full space-y-5" onSubmit={handleBookService}>
                <div className="flex gap-5 items-center">
                    <input type="text" name="name" placeholder="First Name" defaultValue={user?.displayName} className="input input-bordered w-1/2" />
                    <input type="date" name="date" className="input input-bordered w-1/2" />
                </div>

                <div className="flex gap-5 items-center">
                    <input type="text" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-1/2"  />
                    <input type="text" name="price" placeholder="price" className="input input-bordered w-1/2" defaultValue={price} />
                </div>
                <div className="form-control">
                    <textarea name="message" id="" cols="30" rows="10" className="rounded-md p-5" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" value="Order Confirm" className="btn" />
            </form>
        </div>
    );
};

export default Checkout;