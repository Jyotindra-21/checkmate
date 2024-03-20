import React from 'react'
import styles from "./ProductDetail.module.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

export default function ProductDetail() {
    return (
        <section className={styles.Product_Main}>
            <div className={styles.Product_wrapper}>
                <div className={styles.Product_container}>
                    <div className={styles.Product_images}>
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_1920x.jpg?v=1703754982" />
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_1920x.jpg?v=1703754982" />
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1583_18756cd1-765f-4c03-8fdb-ae81278aed2f_1920x.jpg?v=1703754985" />
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_1920x.jpg?v=1703754982" />
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1565_fd4b801e-176e-473a-948f-838526fafa9c_1920x.jpg?v=1703754982" />
                        <img src="https://cdn.shopify.com/s/files/1/0156/6146/files/VitalSeamlessCropTopBlackMarlBlackMarlB1A3D-BBF3-1583_18756cd1-765f-4c03-8fdb-ae81278aed2f_1920x.jpg?v=1703754985" />
                    </div>
                    <div className={styles.Product_details}>
                        <h4 className={styles.Product_Title}>Legacy t-shirt</h4>
                        <h5 className={styles.Product_info}>Black</h5>
                        <h5 className={styles.Product_info}>Gymshark Mens</h5>
                        <h5 className={styles.Product_info}>slim fit</h5>
                        <h5 className={styles.Product_price}>us$28</h5>
                        <div className={styles.Product_sizes}>
                            <h5 className={styles.Product_selectSize}>Select size</h5>
                            <button className={styles.Product_size_label} type="button" >M</button>
                            <button className={styles.Product_size_label} type="button">L</button>
                            <button className={styles.Product_size_label} type="button">xl</button>
                        </div>
                        <button type='button' className={styles.AddTOCart_Btn}><i className="fa-solid fa-bag-shopping mx-2"></i> Add to Bag</button>
                        <div className={styles.Product_accordion}>
                            <div className={styles.option}>
                                <input type="checkbox" id="description" className={styles.toggle} />
                                <label className={styles.title} htmlFor="description">Description
                                </label>
                                <div className={styles.content}>
                                    <div className={styles.content_box}>
                                        <h5>Build your legacy</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam praesentium iste molestiae quas illum quia voluptas temporibus facere dignissimos!</p>
                                        <ul>
                                            <li>Legacy logo takes it back to our roots</li>
                                        </ul>
                                    </div>
                                    <div className={styles.content_box}>
                                        <h5>Slim fit</h5>
                                        <ul>
                                            <li>Slim fit</li>
                                            <li>Model 1 is 6'1 and wears size XL</li>
                                            <li>Model 2 is 6'0 and wears size M</li>
                                        </ul>
                                    </div>
                                    <div className={styles.content_box}>
                                        <h5>Materials & care</h5>
                                        <ul>
                                            <li>95% Cotton , 5% Elastane</li>
                                        </ul>
                                        <p>SKU : A5A3B-BB2J</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link type='button' className={styles.ViewCart_btn}>view cart</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
