import { useContext } from "react";
import { AuthContextCurrent } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const RegisterForm = () => {

    const {emailRegistration} = useContext(AuthContextCurrent);

    const handleRegistration = (e) =>{
        e.preventDefault();

        const form = e.target ;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.url.value;
        console.log(email, password, name, url);

        emailRegistration(email, password)
        .then(user =>{
            const currentUser = user.user;
            console.log(currentUser);

            updateProfile(currentUser, {
                displayName: name, 
                photoURL: url
            }).then(data => console.log('profile Updated'))

        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form className="border md:w-1/2 md:p-10 rounded-lg mx-auto my-10 space-y-3 flex flex-col items-center" onSubmit={handleRegistration}>
                <h1 className="text-3xl font-bold text-center">Register Form</h1>
                <div className="form-control w-full">
                    <label>Name</label>
                    <input type="text" name="name" id="" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label>Picture</label>
                    <input type="text" name="url" id="" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label>Email</label>
                    <input type="email" name="email" id="" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label>Password</label>
                    <input type="password" name="password" id="" className="input input-bordered" />
                </div>
                <div>
                    <input type="submit" value="Register" className="p-3 btn btn-outline" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;