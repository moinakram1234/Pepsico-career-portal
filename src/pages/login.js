import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import parseJwt from "@/components/parsetoken";
import SpinnerIcon from "@/components/SpinnerIcon";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data: session } = useSession();
  const [islogging, setislogging] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setislogging(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, userPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        setUserToken(token);
        setEmail("");
        setUserPassword("");

        localStorage.setItem("token", token);

        const tokenData = parseJwt(token);

        // Check if the user has already submitted data
        
        const emailCheckResponse = await fetch(`/api/nextgensubmission?email=${tokenData.email}`, {
          method: 'GET',
        });

        if (emailCheckResponse.ok) {
          const emailCheckData = await emailCheckResponse.json();
         
          if (emailCheckData.exists) {
            router.push("/nextgen-program/alreadysubmitted");
          } else {
            router.push("/nextgen-program/aplicationform");
          }
        } else {
          const errorData = await emailCheckResponse.json();
          throw new Error(errorData.error || "Failed to check submission status");
        }
      } else {
        if (response.status === 401) {
          const data = await response.json();
          const { error } = data;
          setErrorMessage(error || "Invalid username or password");
        } else {
          setErrorMessage("Failed to log in. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage(error.message || "An unexpected error occurred");
    } finally {
      setislogging(false);
    }
  };



  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="hidden lg:flex lg:w-[40%] brightness-75 blur-sm bg-gray-500">
        <div className="w-full bg-login-image"></div>
      </div>

      <div className="lg:w-[60%] w-[100%] pt-5">
        <div className="flex gap-5 mt-5 justify-center">
          <img className="w-20 h-20" src="logo.png" alt="logo" />
          <h3 className="text-3xl mt-5 text-gray-500">Haidri Beverages</h3>
        </div>
        <main className="flex pt-10 justify-center h-[60%]">
          <div className="border-2 border-gray-200 rounded w-96 p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-500">Sign in</h1>
            <button
              onClick={handleSignUp}
              className="text-blue-500 hover:underline w-full flex justify-end"
            >
              Sign Up
            </button>
            <span>{errorMessage}</span>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border-2 border-gray-400 rounded-full w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="userPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showUserPassword ? "text" : "password"}
                    id="userPassword"
                    className="mt-1 p-2 border-2 border-gray-400 rounded-full w-full"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowUserPassword(!showUserPassword)}
                  >
                    {showUserPassword ? (
                      <span className="text-blue-600">Hide</span>
                    ) : (
                      <span className="text-blue-600">Show</span>
                    )}
                  </span>
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}
              <button
                className="bg-blue-500 flex justify-center text-white p-2 rounded-full hover:bg-blue-600 w-full"
                type="submit"
                disabled={islogging}
              >
                {islogging ? <SpinnerIcon /> : <div>Login</div>}
              </button>
              <div className="text-center mt-2">
                <br />
              </div>
              <br />
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
