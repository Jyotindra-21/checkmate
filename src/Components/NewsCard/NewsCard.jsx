import React from 'react';
import styles from "./NewsCard.module.css"
import { Link } from 'react-router-dom';

export default function NewsCard({ img, title, description, author, date, href }) {
    return (
        <div className={styles.NewsCard_Main}>
            <div className={styles.Post_thumbnail}>
                <Link to={href}>
                    <img src={img} alt="Modern chess" />
                </Link>
            </div>
            <div className={styles.Post_content}>
                <div>
                    <Link to={href} className={styles.Post_title}>{title}</Link>
                    <h6><span> {author} </span>  <span>{date}</span></h6>
                    <p>{description}</p>
                    <Link to={href} className={styles.Read_more}>READ MORE &#129126;</Link>
                </div>
            </div>
        </div>
    )
}
