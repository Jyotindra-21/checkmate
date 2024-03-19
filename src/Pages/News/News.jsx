import React from 'react'
import Heading from '../../Components/Heading/Heading'
import styles from "./News.module.css"
import NewsCard from '../../Components/NewsCard/NewsCard'
export default function News() {
    return (
        <section className={styles.News_Container}>
            <div className={styles.News_Main}>
                <Heading title={`NEWS`} headline={`Read our latest articles tips & news`} description={`On our website you will find a huge amount of materials and lessons that will help you master and improve your chess skills.`} />
                <div className={styles.News_Articles}>
                    <NewsCard href={`#`} title={`Reyansh Bhansal – champion of the week`} img={"assets/post1.webp"} author={`admin`} date={`July 10, 2023`} description={`Modern chess is a sport that requires confident skills, deep knowledge and excellent memory. Of course, this has always been the case, but with the advent of computers in chess, these three factors became even more important than before.`} />

                    <NewsCard href={`#`} title={`“No School” camp and chess tournament`} img={"assets/post2.webp"} author={`admin`} date={`July 10, 2023`} description={`Mat to the opponent is the ultimate goal of any chess game. Knowledge of typical matte patterns is already half the success. By studying typical matte combinations, you can not only increase your chances of putting the mat to the opponent, but also you can avoid it yourself.`} />

                    <NewsCard href={`#`} title={`2023 strategy across the board: The Gala`} img={"assets/post3.webp"} author={`admin`} date={`July 10, 2023`} description={`The talent to understand the tactical motives of the opponent and see hidden combinations is necessary for every chess player who dreams of noticeable results.`} />

                    <NewsCard href={`#`} title={`12 of Paul Morphy’s greatest games!`} img={"assets/post4.png"} author={`admin`} date={`July 10, 2023`} description={`One of the main topics in the process of mastering chess is the study of typical pawn structures. Everyone knows that the pawn structure is an “indicator” of where each side should play.`} />
                </div>
            </div>
        </section>
    )
}
