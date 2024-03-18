import React from "react"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.Footer_sec}>
      <div className={styles.Footer_wrapper}>
        <div className={styles.Company_info}>
          <div className={styles.Brand}>
            <img src="/assets/logo_check.svg" alt="logo" />
          </div>
          <div className={styles.Company_address}>
            <h3>2099 Walnut,<br />
              Hill Ln undefined Lafayette,<br />
              California 55262</h3>
            <h2>+1 234 567 8901</h2>
            <Link>checkmate@example.com</Link>
          </div>
        </div>
        <div className={styles.Company_social}>
          <h2>We're ready to share our advice and experience</h2>
          <p>Review the training program and sign up for a trial session. Prices listed on the site are not final.</p>
          <Link>Contact now</Link>
          <div className={styles.Company_Links}>
            <div className={styles.Company_policy}>
              <h5>Zemez ©. All rights reserved.</h5>
              <p>The use of information is possible only with the permission of the copyright holder.</p>
              <div className={styles.policy}>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
              </div>
            </div>
            <div className={styles.social}>
              <ul>
                <li>
                  
                  <Link><i className="fa-brands fa-facebook-f"></i></Link>
                </li>
                <li>
                  <Link><i className="fa-brands fa-instagram"></i></Link>
                </li>
                <li>
                  <Link><i className="fa-brands fa-youtube"></i></Link>
                </li>
                <li>
                  <Link><i className="fa-brands fa-twitter"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
