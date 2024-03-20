import React from 'react'
import styles from "./CartProduct.module.css"
export default function CartProduct() {
    return (
        <section className={styles.CartPro_Main}>
            <div className={styles.Cart_Pro_Container}>
                <div className={styles.Image_container}>
                    <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_256x.jpg?v=1703754982" alt="legacy shirt" />
                </div>
                <div className={styles.Details_container}>
                    <div className={styles.Details_wraper}>
                        <span className={styles.Offer}>20% OFF</span>
                        <h5 className={styles.product_name}>Legacy T-Shirt</h5>
                        <h5 className={styles.product_info}>slim fit</h5>
                        <h5 className={styles.product_info}>Black | 3xl</h5>
                        <h5 className={styles.product_price}>US$28</h5>
                        <div className={styles.item_bottom}>
                            <button className={styles.delete_Item}><i className="fa-solid fa-trash-can"></i> </button>
                            <div className={styles.item_qty}>
                                <label htmlFor="item_qty">Qty:</label>
                                <select name="qty" id="item_qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
