import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import NovelForm from '../components/NovelForm';

function AddBookPage() {
  return (
    <section className="addbook-page bg-white min-h-screen font-jkt text-txt ">
      <Header />
      <div className="addbook-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <div className="container-addbook h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-white rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-content">
            <h4 className="text-xl font-bold text-txt font-jkt">Crete New Book</h4>
          </div>
          <NovelForm />
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default AddBookPage;
