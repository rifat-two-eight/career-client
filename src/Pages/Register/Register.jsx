import Lottie from "lottie-react";
import register from "../../assets/register.json";
import { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, setLoading, googleLogin } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        setLoading(false);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    googleLogin(googleProvider)
      .then((res) => {
        setLoading(false);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          style={{ width: "30%" }}
          animationData={register}
          loop={true}
        ></Lottie>
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} action="">
              <fieldset className="fieldset">
                <h1 className="text-2xl font-bold">Register now!</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn w-full">
                Register with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
