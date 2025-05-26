import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { store } from './redux/store'
import { Provider } from 'react-redux'

import { Home, Wish, BookPage, Categories, NotFoundPage, Cart} from './pages/';


//создаем контекст для передачи массива из aside в header
export const MenuContext = React.createContext()

function App() {
const [menu, setMenu] = React.useState([])
    
  return (
    <Provider store={store}>
        <div className="wrapper">
            <MenuContext.Provider value={{ menu, setMenu }}>
                <Header/>
        
                <main className="page">
                    <div className="page__container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/wish' element={<Wish />} />
                            <Route path='/bookPage' element={<BookPage />} />
                            <Route path='/categories' element={<Categories />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </main>
                
                <Footer />
            </MenuContext.Provider>
        
        </div>
    </Provider>
    
  );
}

export default App;
