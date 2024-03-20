import React from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import styles from "./Checkout.module.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
export default function Checkout() {
    return (
        <section className={styles.Checkout_Main}>
            <div className={styles.Checkout_wrapper}>
                <div className={styles.Checkout_container}>
                    <div className={styles.Checkout_form}>
                        <form action="">
                            <div className={styles.Contact_title}>
                                <h4 className={styles.form_title}>Contact</h4>
                                <p>Have an account?<Link> Log in </Link></p>
                            </div>
                            <div>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"
                                    className={styles.Form_label}
                                >
                                    <Form.Control className={styles.Form_input} type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </div>
                            <div className={styles.Contact_title}>
                                <h4 className={styles.form_title}>Shipping address</h4>
                            </div>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-12 py-2">
                                        <FloatingLabel className={styles.Form_label} controlId="floatingSelect" label="country/region">
                                            <Form.Select className={styles.Form_input} aria-label="country">
                                                <option className={styles.Form_input} value="US">United States</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>

                                    <div className="col-md-6 col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Full name"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="Full name" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Last name"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="Last name" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Address Line 1"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="Address Line 1" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Address Line 2"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="Address Line 2" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Postcode"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="Postcode" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="City"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="text" placeholder="City" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                        <FloatingLabel className={styles.Form_label} controlId="floatingSelect" label="State/territory">
                                            <Form.Select className={styles.Form_input} aria-label="state">
                                                <option className={styles.Form_input} value="Johor">Johor</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-12 py-2">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Phone"
                                            className={styles.Form_label}
                                        >
                                            <Form.Control className={styles.Form_input} type="tel" placeholder="Phone" />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                    </div>
                                    <div className="col-md-6 col-12 py-2">
                                        <Link className={styles.checkout_btn} type='submit'>Continue to Checkout &rsaquo;</Link>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className={styles.Order_summary}>
                        <ItemCard />
                        <div className={styles.subtotal}>
                            <h6>Subtotal</h6>
                            <h6>$28.00</h6>
                        </div>
                        <div className={styles.total}>
                            <h6>Total</h6>
                            <h4><span className="mr-2">USD</span> $28.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
