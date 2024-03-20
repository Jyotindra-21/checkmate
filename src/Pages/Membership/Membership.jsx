import React from 'react'
import styles from "./Membership.module.css"
export default function Membership() {
    return (
        <section className={styles.Membership_Main}>
            <div className={styles.Membership_container}>
                <div className={styles.Membership_card}>
                    <h2 className={styles.Card_Title}>Membership Search</h2>
                    <p className={styles.sub_info}>Search and Renew your membership here</p>

                    <div className={styles.Search_Form}>
                        <form action="">
                            <div className={styles.search_form_control}>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="tel" placeholder='01162252454' id='phoneNumber' />
                            </div>
                            <div className={styles.search_form_control}>
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" placeholder='Jhon Doe' id='fullname' />
                            </div>
                            <div>
                                <h5 className={styles.form_or}>OR</h5>
                            </div>
                            <div className={styles.search_form_control}>
                                <label htmlFor="icnumber">IC Number</label>
                                <input type="text" placeholder='991211011988' id='icnumber' />
                            </div>
                            <div className={styles.search_form_control}>
                                <button type='submit'>Search Membership</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
