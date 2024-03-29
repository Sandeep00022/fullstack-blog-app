import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oauth } from "../components/Oauth";

const Signup = () => {
  const [formdata, setFormData] = useState({});
  const [errorMessage, setErrormessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.username || !formdata.email || !formdata.password) {
      return setErrormessage("Please fill out all fields");
    }

    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (res.ok) {
        navigate("/sign-in");
      }
      if (data.success === false) {
        setLoading(false);
        return setErrormessage(data.message);
      }
      setLoading(false);
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div
        className="flex p-3 max-w-3xl mx-auto 
      flex-col md:flex-row md:items-center gap-5"
      >
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 
        via-purple-500 to-pink-500 rounded-lg text-white text-4xl "
            >
              Blog
            </span>
            Space
          </Link>
          <p className="text-sm mt-5">
            Hey let's start with some good blogs. You can up with your email and
            password or with Google
          </p>
        </div>
        {/* right */}

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              disabled={loading}
              gradientDuoTone={"purpleToPink"}
              type="submit"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <Oauth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
