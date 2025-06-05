import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SellerLogin = () => {
  const { isSeller, setIsSeller } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSeller) {
      navigate('/seller'); // redirect if already logged in
    }
  }, [isSeller, navigate]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSeller(true);
  };

  return !isSeller&& (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex justify-center items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 p-8 py-12 border rounded-md shadow-md w-full max-w-md">
          <p className="text-2xl font-medium text-center">
            <span className="text-primary">Seller </span>Login
          </p>

          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
  );
};

export default SellerLogin;
