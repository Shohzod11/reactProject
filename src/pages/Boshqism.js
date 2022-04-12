import React from 'react';
import Boshqism from '../components/BoshQism/boshqism';
import PrimarySearchAppBar from './../components/Navbar/navbar';
import Footer from './../components/Footer/footer';

function Boshqismpage() {
  return (
    <>
      <PrimarySearchAppBar />
      <Boshqism />
      <Footer />
    </>
  );
}

export default Boshqismpage;