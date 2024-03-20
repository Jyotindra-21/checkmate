import React from 'react'
import styles from "./SearchResult.module.css"
import { Link } from 'react-router-dom'

export default function SearchResult() {
  return (
    <section className={styles.Search_Main}>
      <div className={styles.Search_wrapper}>
        <h2 className={styles.Search_Title}>Search Result</h2>
        <table className={styles.Search_table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Renew Membership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jhon Doe</td>
              <td><Link className={styles.Register}>Renew Now</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
