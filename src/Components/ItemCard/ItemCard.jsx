import React from 'react'
import styles from "./ItemCard.module.css"
import { Badge } from 'react-bootstrap'
function ItemCard() {
    return (
        <div className={styles.Item_Container}>
            <div className={styles.Item_wrapper}>
                <div className={styles.Item_Image}>
                    <Badge pill bg="secondary" style={{ position: "absolute", right: "-5px", top: "-5px" }}>1</Badge>
                    <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_256x.jpg?v=1703754982" alt="Legacy t-shirt" />
                </div>
                <div className={styles.Item_Details}>
                    <h5>Legacy t-shirt - black</h5>
                    <p>Size: <span>3XL</span></p>
                    <p>Slim fit</p>
                </div>
                <div className={styles.Item_Price}>
                    <h5>$28.00</h5>
                </div>
            </div>
        </div>
    )
}

export default ItemCard