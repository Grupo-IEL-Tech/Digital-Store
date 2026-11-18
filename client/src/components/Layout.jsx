import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router';

// Definindo o componente de layout
export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

