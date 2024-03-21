import React from 'react'
import styles from "./SideEvent.module.css"
import { Link } from 'react-router-dom'

export default function SideEvent() {
  return (
    <section className={styles.SideEvent_Main}>
      <div className={styles.SideEvent_wrapper}>
        <h2 className={styles.SideEvent_Title}>Side Event</h2>
        <table className={styles.SideEvent_table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>{` Name (Click event name to open details)`}</th>
              <th>Contact Organizer</th>
              <th>Location</th>
              <th>FIDE Rated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Link>Abdurrahman Yusuf Bin Mohd Akhir</Link></td>
              <td>M</td>
              <td>SK Pauh Jaya , pulau pinag</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td><Link>Abdurrahman Yusuf Bin Mohd Akhir</Link></td>
              <td>M</td>
              <td>SK Pauh Jaya , pulau pinag</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td><Link>Abdurrahman Yusuf Bin Mohd Akhir</Link></td>
              <td>M</td>
              <td>SK Pauh Jaya , pulau pinag</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td><Link>Abdurrahman Yusuf Bin Mohd Akhir</Link></td>
              <td>M</td>
              <td>SK Pauh Jaya , pulau pinag</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td><Link>Abdurrahman Yusuf Bin Mohd Akhir</Link></td>
              <td>M</td>
              <td>SK Pauh Jaya , pulau pinag</td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  )
}
