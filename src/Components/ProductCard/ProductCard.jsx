import React from 'react'
import styles from "./ProductCard.module.css"
import { Link } from 'react-router-dom'

export default function ProductCard({ img, href, alt = "", offer, ProductName, ProductSize, ProductColor, ProductPrice, ProductRating, ProductDiscountedPrice }) {
    return (
        <div className={styles.Product_Card}>
            <div className={styles.Card_img}>
                <button className={styles.whishList_btn}><i className="fa-regular fa-heart"></i></button>
                <Link to={href}><img src={img} alt={alt} /> </Link>
                <button className={styles.Offer_off}>{offer} OFF</button>
            </div>
            <div className={styles.Card_details}>
                <h3 className={styles.Product_Name}>{ProductName}</h3>
                <h3 className={styles.Product_size}>{ProductSize}</h3>
                <h3 className={styles.Product_color}>{ProductColor}</h3>
                <h3 className={styles.Product_price}>{ProductDiscountedPrice}<span>{ProductPrice}</span></h3>
                <h3 className={styles.Product_rating}>{ProductRating}</h3>
            </div>
        </div>
    )
}
