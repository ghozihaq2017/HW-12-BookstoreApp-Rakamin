import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardBook from './CardBook';
import { asyncReceiveBooks } from '../states/books/action';

function ContainerBooks() {
  const books = useSelector((states) => states.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-cards flex justify-center items-center ">
      <div className="products xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid mt-5 gap-5 xl:gap-12 place-content-between w-full">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default ContainerBooks;
