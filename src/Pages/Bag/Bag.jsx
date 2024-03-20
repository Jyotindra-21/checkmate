import React from 'react'
import styles from "./Bag.module.css"
import CartProduct from '../../Components/CartProduct/CartProduct'
export default function Bag() {
    return (
        <section className={styles.Bag_Main}>

            <div className={styles.Bag_Container}>
                <div className={styles.Your_Bag}>
                    <h2 className={styles.Title}>Your bag</h2>
                    <p className={styles.Message}><i className="fa-solid fa-circle-info" /> <span>Your items aren’t reserved,</span> checkout quickly to make sure you don’t miss out.</p>
                    <div className={styles.Items_container}>
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                </div>
                <div className={styles.Cart_Summary}>
                    <h2 className={styles.Title}>Summary</h2>
                    <div className={styles.Payment_summary}>
                        <div className={styles.subtotal}>
                            <h6>Subtotal</h6>
                            <h6>US$35</h6>
                        </div>
                        <div className={styles.total}>
                            <h6>Total</h6>
                            <h6>US$28</h6>
                        </div>
                    </div>
                    <button type='button' className={styles.Checkout_Btn}><i className="fa-solid fa-bag-shopping mx-2"></i> Checkout securely</button>
                </div>

            </div>
        </section>
    )
}
