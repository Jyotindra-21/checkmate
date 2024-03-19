import React from 'react'
import style from "./Contact.module.css"
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'
// import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <section className={style.Contact_container}>
                <div className={style.Contact_main}>
                    <Heading title={`LET’S TALK`} headline={`We’re here to answer any questions you may have`} description={`Tell us everything about your problem, we’ll be glad to help. Fill out the form, or if you prefer send us an email.`} />
                    <div className={style.Contact_wrapper}>
                        <div className={style.Contat_details_wrapper}>
                            <div className={style.Contact_details}>

                                <p>2099 Walnut,<br />
                                    Hill Ln undefined Lafayette,<br />
                                    California 55262
                                </p>
                                <h1>+1 234 567 8901</h1>
                                <Link>checkmate@example.com</Link>
                                <div className={style.Contact_social}>
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
                        <div className={style.Contact_form}>
                            <form action="">
                                <div className={style.Form_control}>
                                    <label htmlFor="name">Your Name</label>
                                    <input className={style.Form_input} type="text" id='name' placeholder={`What's your name?`} />
                                </div>
                                <div className={style.Form_control}>
                                    <label htmlFor="email">Your Name</label>
                                    <input className={style.Form_input} type="email" id='email' placeholder={`What's your email?`} />
                                </div>
                                <div className={style.Form_control}>
                                    <textarea placeholder={`Tell us how we can help!`} className={style.Form_input} name="" id="" cols="30" rows="4"></textarea>
                                </div>
                                <div className={style.Form_control}>
                                    <input type="checkbox" id='privacy_policy' />
                                    <label className={style.terms} htmlFor="privacy_policy"> I agree to the <Link>Privacy Policy</Link>  and <Link>Terms of Use</Link> , and want to receive news</label>
                                </div>
                                <div className={style.Form_control}>
                                    <button type='submit'> send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.Contact_map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14689.556347632617!2d72.58813614414566!3d23.009481917567584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c51048cefb%3A0x777f51782a8b7a1a!2sKankaria%20Lake!5e0!3m2!1sen!2sin!4v1710592155828!5m2!1sen!2sin" width={"100%"} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </section>
        </>

    )
}
