import React from 'react';
import Header from '../components/Header';
import ContainerBooks from '../components/ContainerBooks';
import Navigation from '../components/Navigation';

function Homepage() {
  return (
    <section className="homepage bg-white min-h-screen font-jkt text-txt ">
      <Header />
      <div className="home-page-content px-2 py-10 md:px-10 w-full flex items-center flex-col ">
        <div className="container-products h-auto min-h-screen px-4 md:px-10 py-10 w-full bg-white rounded-xl pb-28 shadow-3xl md:w-10/12 mt-12">
          <div className="title-product">
            <h4 className="text-xl font-bold text-txt font-jkt">Rekomendasi Novelnest Untukmu</h4>
          </div>
          <ContainerBooks />
        </div>
      </div>
      <Navigation />
    </section>
  );
}

export default Homepage;
