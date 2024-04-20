import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveDetailThread } from '../states/detailBook/action';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import NovelForm from '../components/NovelForm';

function EditBookPage() {
  const detailBook = useSelector((states) => states.detailBook);
  const { bookId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(bookId));
  }, [bookId, dispatch]);

  if (!detailBook) {
    return null;
  }
  return (
    <section className="editbook-page bg-white min-h-screen font-jkt text-txt ">
      <Header />
      <div className="editbook-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <div className="container-editbook h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-white rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-content">
            <h4 className="text-xl font-bold text-txt font-jkt">Edit Book</h4>
          </div>
          <NovelForm bookData={detailBook} />
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default EditBookPage;
