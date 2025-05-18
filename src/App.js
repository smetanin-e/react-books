import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { Home, Wish, Book, Categories, NotFoundPage, Cart} from './pages/';




function App() {

    
  return (
    <div className="wrapper">
        <Header/>
        
        <main className="page">
            <div className="page__container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wish' element={<Wish />} />
                    <Route path='/book' element={<Book />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </main>
        <Footer />
   </div>
  );
}

export default App;
