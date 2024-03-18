import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React from "react";

export default function Header() {
  return (
  <header className={styles.Header}>
    <div>
        <img src="/assets/logo_check.svg" alt="Site logo"/>
    </div>
    <div className={styles.Header_Links_Wrapper}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link>Products & Services</Link>
            </li>
            <li>
                <Link>Events</Link>
            </li>
            <li>
                <Link>News</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <button className={styles.Header_btn}>
            GET STUDY
        </button>
    </div>
  </header>
  );
}
