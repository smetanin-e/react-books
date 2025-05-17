import React from 'react';



import Banner from '../components/Banner'
import Header from '../components/Header';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';
import Aside from '../components/Aside';



function Home() {

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
    const url = 'https://815c3fb7d56c4537.mokky.dev/books';

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
                    <Aside 
                        items={items}
                    />

                    <Tabs items={items}/>     
                </div>
            </div>
        </main>
        
        <Footer />
   </div>
  );
}

export default Home;
