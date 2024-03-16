import React from 'react'
import styles from "./Testimonial.module.css"

export default function Testimonial(
    { content = "“Thank you for organizing classes for our attentive, caring coach! My son is delighted with chess!.”",
        img = "/assets/testi.png",
        name = "Leslie Pena",
        date = "October 24, 2023" }) {
    return (
        <div className={styles.Testimonial_container}>
            <h2>{content}</h2>
            <div className={styles.Testimonial_details}>
                <div className={styles.Testimonial_img}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.Testimonial_information}>
                    <h3>{name}</h3>
                    <span>{date}</span>
                </div>

            </div>
        </div>
    )
}
