import React from 'react'
import styles from "./Heading.module.css"

function Heading({ title, headline, description, color = "" }) {
    return (
        <div className={styles.Heading_content} style={{ color: color }} >
            <p className="section-sub-heading">{title}</p>
            <h2 className="section-heading">
                {headline}
            </h2>
            <h3 className="section-24px">
                {description}
            </h3>
        </div>
    )
}

export default Heading