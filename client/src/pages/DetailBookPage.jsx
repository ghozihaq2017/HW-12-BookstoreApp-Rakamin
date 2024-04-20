import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Link, useParams } from 'react-router-dom';
import { asyncReceiveDetailThread } from '../states/detailBook/action';
import { BiSolidEdit, BiSolidTrash } from 'react-icons/bi';
import { asyncRemoveBook } from '../states/books/action';

function DetailBookPage() {
  const detailBook = useSelector((states) => states.detailBook);
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const onDeleteBook = () => {
    // Kirim permintaan penghapusan buku
    dispatch(asyncRemoveBook(parseInt(bookId)));
  };

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(bookId));
  }, [bookId, dispatch]);

  if (!detailBook) {
    return null;
  }
  return (
    <section className="detail-book font-jkt bg-white text-txt min-h-screen">
      <Header />
      <div className="detail-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col xl:pb-32">
        <div className="detail-container flex flex-col md:flex-row mt-20 md:px-8 xl:px-24 px-0">
          <figure className=" p-2 w-full md:w-[30rem] max-h-[40rem]">
            <img
              className="w-full h-full object-cover"
              src={`http://localhost:8000/${detailBook.image}`}
              alt={`${detailBook.title} image`}
            />
          </figure>
          <div className="detail-body md:w-2/4 w-full md:ml-10 pt-4 px-6 md:px-0 pb-20">
            <div className="title-product">
              <p className="text-base mb-3">Book</p>
              <h5 className="text-3xl font-bold mb-3">{detailBook.title}</h5>
              <p className="price text-xl mb-6">{detailBook.author}</p>
            </div>

            <div className="description">
              <p className="text-sm leading-6">{`Publisher: ${detailBook.publisher}`}</p>
              <p className="text-sm leading-6">{`Pages: ${detailBook.pages}`}</p>
              <p className="text-sm leading-6">{`Year: ${detailBook.year}`}</p>
            </div>

            <div className="buttons-action flex mt-5">
              <Link to={`/editbook/${detailBook.id}`} className="btn btn-primary text-white w-36">
                <BiSolidEdit />
                Edit
              </Link>
              <button className="btn btn-error text-white ml-5 w-36" onClick={onDeleteBook}>
                <BiSolidTrash />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default DetailBookPage;
