import posterBg from '../assets/img/baner/poster-bg.png';
import posterBook from '../assets/img/baner/poster-book.jpg';


function Banner() {
  return (
    <div className="baner-page__banner banner">
                            <div className="banner__bg">
                                <img src={posterBg} alt="" className="image"/>
                            </div>
                            <h3 className="banner__title">Deal of the Month</h3>
                            <p className="banner__subtitle">The Human Face of Big Data</p>
                            <div className="banner__image">
                                <img className="image" src={posterBook} alt="image5"/>
                            </div>
                            <p className="banner__sale">Save 45% Today</p>
                            <p className="banner__price">$27.50</p>
                            
                            <button className="banner__button btn btn_green">Buy now</button>
                        </div>
  )
}

export default Banner