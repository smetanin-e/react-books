import React from 'react';



import Banner from './components/Banner';
import Header from './components/Header';
import Products from './components/Products';
import Slider from './components/Slider';
import Tabs from './components/Tabs';




function App() {

    //создаем состояние для хранения загруженных книг из сервера
    const [items, setItems] = React.useState([{
    "id": "0",
    "imageUrl": "https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover_415/23997456-elena-valerevna-motova-moy-luchshiy-drug-zheludok-eda-dlya-umnyh-ludey.webp",
    "title": "Мой лучший друг – желудок.",
    "author": "Елена Мотова",
    "description": "Как работают желудок, печень и кишечник? Одинаково ли мы чувствуем вкус? Перед вами – новый формат книги о питании. Вы узнаете не только о пищеварении и обмене веществ, но и о том, как мозг и гормоны регулируют вес. Каким образом формируются пищевые привычки, почему люди толстеют после диет и зачем нам нужны разные питательные вещества – на эти и другие вопросы отвечает наука о питании.",
    "price": "400",
    "sale": 10,
    "category": "Хобби, досуг",
    "subCategory": "Кулинария",
    "tab": "Новинки"
  }]);

    //ссылка на массив объектов, содержащий ениги
    const url = 'https://6824bf760f0188d7e72aa30a.mockapi.io/book';

    //Функция для упрощения формирования запросов запросов 
    const getData = (url) =>
        new Promise((resolve,reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
        )
    
    console.log(items);

    //Оборачиваем запрос данных с сервера в useEffect, чтобы при каждом изменении 
    //не было нового рендера
    React.useEffect(() => {
        //вызываем функцию и прердаем ссылку для получения данных с сервера
        getData(url).then(data => setItems(data)).catch(error => console.log(error.message));
    },[])
  
    //фильтрую все книги, которые имеют скидку, затем нахожу объект с максимальной скидкой
    const bannerItem = items
        .filter((obj) => obj.sale)
        .reduce((prev,cur) => +cur.sale > +prev.sale ? cur : prev);
    console.log(bannerItem);
    
    
        
  return (
    <div className="wrapper">
        <Header/>
        
        <main className="page">
            <div className="page__container">
                <div className="page__banner baner-page">
                    
                    <Slider/>
                    <Banner bestSale = {bannerItem ?bannerItem:null}/>
                    
                </div>

                <div className="page__products products-page">
                    <aside className="products-page__categories categories">
                        <h2 className="categories__title">Категории</h2>
                        <div className="categories__item item-category">
                            <h3 className="item-category__title nav-link nav-link-active">ALL</h3>
                        </div>
                        <div className="categories__item item-category">
                            <h3 className="item-category__title nav-link">Fiction & Literature</h3>
                            <ul className="item-category__list">
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Science Fiction</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Children</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Fantasy</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Mystery</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Horror</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Poetry</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Literature</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Crime</a>
                                </li>
                            </ul>
                        </div>
                        <div className="categories__item item-category">
                            <h3 className="item-category__title nav-link">Non - Fiction</h3>
                            <ul className="item-category__list">
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Science Fiction</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Children</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Fantasy</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Mystery</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Horror</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Poetry</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Literature</a>
                                </li>
                                <li className="item-category__subcategory nav-link">
                                    <a href="#">Crime</a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <Tabs items={items}/>
                    {/*
                        <div className="products-page__books tabs-page">
                            <ul className="tabs-page__list">
                                <li className="tabs-page__link --active-tab-nav">Best sellers</li>
                               
                                <li className="tabs-page__link">New Arrivals</li>
                                <li className="tabs-page__link">Used Books</li>
                                <li className="tabs-page__link">Special Offers</li>
                                
                            </ul>

                            <div className="products-page__items content-tab">
                                <div className="content-tab__item products">
                                {
                                    items.map((obj) => (
                                        <Products 
                                            id={obj.id}
                                            title={obj.title}
                                            image={obj.imageUrl}
                                            sale={obj.sale}
                                            price={obj.price}
                                            onClick={() => alert(obj.id)}
                                            />
                                    ))
                                }
                                </div>
                                

                                <div className="pagination">
                                    <ul className="pagination__list">
                                      <li className="current-page">1</li>
                                      <li>2</li>
                                      <li>3</li>
                                      <li>4</li>
                                      <li>5</li>
                                    </ul>
                                  </div>
                            </div>
                    </div>
                    */}
                    
                    
                </div>
            </div>
        </main>
        <footer className="footer">
            <p>Проект разработал Сметанин Евгений Евгеньевич</p>
            <p>2025 г.</p>
        </footer>
   </div>
  );
}

export default App;
