import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { BiSolidBookOpen, BiSolidBookAdd, BiLogIn, BiLogOut } from 'react-icons/bi';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation() {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'See you again!',
      showConfirmButton: false,
      timer: 1700,
    });
    navigate('/login');
  };
  return (
    <div className="navigation w-full fixed bottom-10 flex justify-center drop-shadow-xl">
      <div className="btm-nav w-10/12 md:w-6/12  xl:w-4/12 relative rounded-full drop-shadow-xxl shadow-2xl">
        <Link
          to="/"
          className="bg-white text-pink-600 rounded-l-full hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600"
        >
          <BiSolidBookOpen />
          <span className="btm-nav-label ">Books</span>
        </Link>
        {authUser && (
          <Link
            to="/addbook"
            className="bg-white text-pink-600 hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600"
          >
            <BiSolidBookAdd />
            <span className="btm-nav-label">Add</span>
          </Link>
        )}
        {authUser ? (
          <Link
            to="/login"
            className="bg-white text-pink-600  hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600 rounded-r-full"
            onClick={() => onSignOut()}
          >
            <BiLogOut />
            <span className="btm-nav-label">Sign Out</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-white text-pink-600  hover:active hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600 rounded-r-full"
          >
            <BiLogIn />
            <span className="btm-nav-label">Sign In</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navigation;
