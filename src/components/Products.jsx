import React from 'react'


const Products = (props) => {

    const onClickImage = () => {
        alert(`${props.title}`)
    }

  return (
            <div className="products__item item-product" >
                {props.prise
                    ? (
                    <div className="item-product__sale">
                        <p>
                            {props.sale}%
                        </p>
                        <span>off</span>
                    </div>)
                    : ('')}
            
            <div className="item-product__image" onClick={props.onClick}>
                <img src={props.image} alt="" />
            </div>
            <h2 className="item-product__title">{props.title}</h2>
            <p className="item-product__price">{props.price + " ₽"}</p>
         
        
        

                                        {/**
                                         * <div className="products__item item-product">
                                          <div className="item-product__image">
                                            <img
                                              src="https://ndc.book24.ru/resize/440x568/pim/products/images/44/d3/0195bc8a-e28d-7a2b-9a08-92c6d10f44d3.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                          <p className="item-product__price">$50</p>
                                        </div>
                                        <div className="products__item item-product">
                                          <div className="item-product__sale">
                                            <p>13%</p>
                                            <span>Off</span>
                                          </div>
                                          <div className="item-product__image">
                                            <img
                                              src="https://ndc.book24.ru/resize/440x568/pim/products/images/ba/11/019580aa-3a16-7133-9e50-379fc9feba11.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                          <p className="item-product__price">$50</p>
                                        </div>
                                        <div className="products__item item-product">
                                          <div className="item-product__image">
                                            <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/96/93/01947814-fb23-75b7-a9a2-a1b779209693.jpg" alt="" />
                                          </div>
                                          <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                          <p className="item-product__price">$50</p>
                                        </div>
                                        <div className="products__item item-product">
                                            <div className="item-product__sale">
                                              <p>20%</p>
                                              <span>Off</span>
                                            </div>
                                            <div className="item-product__image">
                                              <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/b2/dd/01958bdf-77f3-76d5-bde1-1e162460b2dd.jpg" alt="" />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__image">
                                              <img
                                                src="https://ndc.book24.ru/resize/440x568/pim/products/images/44/d3/0195bc8a-e28d-7a2b-9a08-92c6d10f44d3.jpg"
                                                alt=""
                                              />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__sale">
                                              <p>13%</p>
                                              <span>Off</span>
                                            </div>
                                            <div className="item-product__image">
                                              <img
                                                src="https://ndc.book24.ru/resize/440x568/pim/products/images/ba/11/019580aa-3a16-7133-9e50-379fc9feba11.jpg"
                                                alt=""
                                              />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__image">
                                              <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/96/93/01947814-fb23-75b7-a9a2-a1b779209693.jpg" alt="" />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__sale">
                                              <p>20%</p>
                                              <span>Off</span>
                                            </div>
                                            <div className="item-product__image">
                                              <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/b2/dd/01958bdf-77f3-76d5-bde1-1e162460b2dd.jpg" alt="" />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__image">
                                              <img
                                                src="https://ndc.book24.ru/resize/440x568/pim/products/images/44/d3/0195bc8a-e28d-7a2b-9a08-92c6d10f44d3.jpg"
                                                alt=""
                                              />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__sale">
                                              <p>13%</p>
                                              <span>Off</span>
                                            </div>
                                            <div className="item-product__image">
                                              <img
                                                src="https://ndc.book24.ru/resize/440x568/pim/products/images/ba/11/019580aa-3a16-7133-9e50-379fc9feba11.jpg"
                                                alt=""
                                              />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__image">
                                              <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/96/93/01947814-fb23-75b7-a9a2-a1b779209693.jpg" alt="" />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                          <div className="products__item item-product">
                                            <div className="item-product__image">
                                              <img src="https://ndc.book24.ru/resize/440x568/pim/products/images/96/93/01947814-fb23-75b7-a9a2-a1b779209693.jpg" alt="" />
                                            </div>
                                            <h2 className="item-product__title">The Hare With Amber Eyes</h2>
                                            <p className="item-product__price">$50</p>
                                          </div>
                                         */}
                                        
                                      
            </div>
  )
}

export default Products