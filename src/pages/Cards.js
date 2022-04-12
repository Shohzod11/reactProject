import React from 'react'
import Footer from '../components/Footer/footer';
import PrimarySearchAppBar from '../components/Navbar/navbar';
import Cards from './../components/Cards/card';

function Cardlar() {
  return (
    <>
    <PrimarySearchAppBar />
    <Cards />
    <Footer />
    </>
  );
}

export default Cardlar;