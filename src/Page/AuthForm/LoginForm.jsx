import { useContext } from "react";
import { AuthContextCurrent } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const {userEmailLogin}  = useContext(AuthContextCurrent);


    const handleLogin = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userEmailLogin(email, password)
        .then(data => {
            console.log(data);
            alert('successful login')
        })
        .catch(error => alert('wrong '))

    }

    return (
        <div>
            <form className="border md:w-1/2 md:p-10 rounded-lg mx-auto my-10 space-y-3 flex flex-col items-center" onSubmit={handleLogin}>
                <h1 className="text-3xl font-bold text-center">Login Form</h1>
                <div className="form-control w-full">
                    <label>Email</label>
                    <input type="email" name="email" id="" className="input input-bordered" placeholder="Enter your email" />
                </div>
                <div className="form-control w-full">
                    <label>Password</label>
                    <input type="password" name="password" id="" className="input input-bordered" placeholder="Enter your password" />
                </div>
                <div>
                    <input type="submit" value="Login" className="p-3 btn btn-outline" />
                </div>
                <p>New here? <Link className="font-bold text-blue-600" to={'/register'}>Register</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;