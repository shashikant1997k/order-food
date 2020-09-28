import React from 'react'
import '../css/ItemsColumn.css'

function ItemsColumn({item}) {

    return (
        <div className="item__product">
            <h5>Popular Ones</h5>
            {
                item.map((val,i) => (
                    <div key={i} className="item_productCart">
                        <div className="img__div">
                            <img className="item__productImage" src={val?.small_image} alt=""/>    
                        </div>
                        
                        <div className="item__productInfo">
                            <h6>{val?.restaurant_name}</h6>
                            <p className="item__name">Cake, Pasta, Pizza</p>
                            <p className="item__shopPlace">{val?.address_complete}</p>
                            <p className="offers__trending">4 Offers trending</p>
                            <div className="item_rating_price">
                                <div className="item__rating">
                                    <h6>⭐️{val?.rating?.restaurant_avg_rating}</h6>
                                    <p>Popularity</p>
                                </div>
                                <div className="item__price">
                                    <h6>{val?.currency?.symbol} {val?.avg_cost_for_two}</h6>
                                    <p>Cost for two</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsColumn
