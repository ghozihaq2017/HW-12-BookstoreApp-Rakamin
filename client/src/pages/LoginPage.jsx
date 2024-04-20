import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { BiSolidBookBookmark } from 'react-icons/bi';
import Swal from 'sweetalert2';
import LoginInput from '../components/LoginInput';
import bookstore from '../assets/img/bookstore.jpeg';

function LoginPage() {
  const authUser = useSelector((state) => state.authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  useEffect(() => {
    if (authUser) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Welcome to Novelnest',
        showConfirmButton: false,
        timer: 1700,
      });
      navigate('/');
    }
  }, [authUser, navigate]);

  return (
    <section className="login-page flex h-screen font-jkt text-txt">
      <div className="container h-screen w-2/4 bg-darkblue max-[900px]:hidden">
        <img src={bookstore} className="object-cover h-screen w-full" alt="Book Store" />
      </div>
      <div className="container relative h-screen w-full bg-white pl-4 md:w-2/4 md:pl-48">
        <p className="absolute mt-8 text-sm md:left-2/4">
          Don&apos;t have an account yet?&nbsp;
          <Link to="/register" className="font-semibold hover:font-bold cursor-pointer">
            Sign Up now
          </Link>
        </p>
        <h1 className="mt-32 font-ysv text-darkblue text-5xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">
          <span className="inline-block text-4xl">
            <BiSolidBookBookmark />
          </span>
          <span className="inline-block">Novelnest</span>
        </h1>
        <p className="mt-4 text-xl font-bold ">Welcome Back, Please enter Your details</p>
        <LoginInput login={onLogin} />
        <p className="mt-7 text-sm">
          Back to&nbsp;
          <Link to="/" className="font-semibold hover:font-bold cursor-pointer">
            Homepage
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
