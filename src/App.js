import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import { Home, Wish, Item, Categories, NotFoundPage, Cart} from './pages/';




function App() {

    
  return (
    <Provider store={store}>
        <div className="wrapper">
        <Header/>
        
        <main className="page">
            <div className="page__container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wish' element={<Wish />} />
                    <Route path='/item' element={<Item />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </main>
        <Footer />
   </div>
    </Provider>
    
  );
}

export default App;
