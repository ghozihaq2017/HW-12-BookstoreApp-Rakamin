import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { FaRegEnvelope, FaKey } from 'react-icons/fa';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <label
        className="relative mt-11 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="email-login"
      >
        <span className="sr-only">Email</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaRegEnvelope className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-16 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Enter your email"
          type="text"
          name="email"
          id="email-login"
          value={email}
          onChange={onEmailChange}
          required
        />
      </label>
      <label
        className="relative mt-7 block  drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)]"
        htmlFor="password-login"
      >
        <span className="sr-only">Password</span>
        <span className="absolute inset-y-0 left-6 flex items-center pl-2 text-[#808080]">
          <FaKey className="h-6 w-6 " />
        </span>
        <input
          className=" placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 block h-16 w-[350px] rounded-xl bg-white py-1 pl-20  pr-3 focus:outline-none focus:ring-1 sm:text-sm md:w-[412px]"
          placeholder="Password"
          type="password"
          name="password"
          id="password-login"
          value={password}
          onChange={onPasswordChange}
          required
        />
      </label>
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="mt-14 flex h-16 w-[350px] items-center justify-center rounded-xl bg-darkblue py-6 font-semibold text-white drop-shadow-[7px_7px_2px_rgba(0,0,0,0.25)] hover:bg-primary hover:font-bold md:w-[412px]"
      >
        <span className="pl-4">Sign In</span>
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
