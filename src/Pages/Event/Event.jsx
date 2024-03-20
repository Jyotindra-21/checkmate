import React from 'react'
import styles from "./Event.module.css"
import { Link } from 'react-router-dom'

export default function Event() {
  return (
    <section className={styles.Event_Main}>
      <div className={styles.Event_wrapper}>
        <h2 className={styles.Event_Title}>Main Event</h2>
        <table className={styles.Event_table}>
          <thead>
            <tr>
              <th>No</th>
              <th>{`Event Name (Click event name to open details)`}</th>
              <th>Register Now</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>
            <tr>
              <td>2</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>
            <tr>
              <td>3</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>

            <tr>
              <td>4</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>
            <tr>
              <td>5</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>
            <tr>
              <td>6</td>
              <td><Link>Event Number 1</Link></td>
              <td><Link className={styles.Register}>Register Now</Link></td>
              <td>SK Pauh Jaya , pulau pinag</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
