
const LoginForm = () => {

    const handleLogin = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div>
            <form className="border md:w-1/2 md:p-10 rounded-lg mx-auto my-10 space-y-3 flex flex-col items-center" onSubmit={handleLogin}>
                <h1 className="text-3xl font-bold text-center">Login Form</h1>
                <div className="form-control w-full">
                    <label>Email</label>
                    <input type="email" name="email" id="" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label>Password</label>
                    <input type="password" name="password" id="" className="input input-bordered" />
                </div>
                <div>
                    <input type="submit" value="Login" className="p-3 btn btn-outline" />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;