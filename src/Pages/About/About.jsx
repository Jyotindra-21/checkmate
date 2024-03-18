import React, { useState } from 'react'

// import Carousel from 'react-bootstrap/Carousel';

import style from "./About.module.css"

import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'
import Testimonial from '../../Components/Testimonial/Testimonial'
import TestimonialsSlider from '../../Components/TestimonialsSlider/TestimonialsSlider'


export default function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const about_heading = {
    title: "VISIT OUR CHESS CLUB",
    headline: "Chess championship: in the classroom and the community",
    description: "Chess tournament is a small holiday. You come, around, in addition to you, many children, parents, the child can immediately find new friends – after all, it is much easier to meet and make friends with a person if you know in advance that you have a common interest – chess."
  }
  return (
    <div className={style.about_container}>
      <section className={style.About_Main}>
        <Heading title={about_heading.title} headline={about_heading.headline} description={about_heading.description} />

        <div className={style.Visit_sec_Details}>
          <div className={style.Visit_Image_Wrapper}>
            <img src="/assets/home_img2.webp" alt="Boy Playing Chess" />
          </div>
          <div className={style.Visit_Content}>
            <p>
              Regular participation in competitions is a very harmonious addition to all efforts that the child makes during classes.
            </p>
            <p>Only participation in competitions can unlock the potential of a child.</p>
            <h3>Interested in joining chess team? Call us:</h3>
            <h1>+1 234 567 8901</h1>
            <span>
              <Link>CONTACT US NOW</Link>
            </span>
          </div>
        </div>
        <Heading title={"VISIT OUR CHESS CLUB"} headline={`Help your child improve their strategic thinking`} description={`Chess allows children to develop such qualities as independence and determination. Carried away by the game, the child learns to think and concentrate. Gets skills such as calculating all kinds of moves, their consequences, forecasting events and the ability to take correct steps. Not only mental abilities are formed, but also personal qualities of character.`} />

        <div className={style.strategic}>
          <div className={style.strategic_card}>
            <div className={style.strategic_img}>
              <img src="/assets/about_img.webp" alt="" />
            </div>
            <div className={style.strategic_desc}>
              <p>It is known that professional chess players have visual memory different from most people. This quality is developed by years of training and remains with the person for the rest of his life.</p>
            </div>
          </div>
          <div className={style.strategic_card}>
            <div className={style.strategic_img}>
              <img src="/assets/about_img2.webp" alt="" />
            </div>
            <div className={style.strategic_desc}>
              <p>Playing chess, the child learns to think not only abstractly, but also logically. Considering the options for moves on the board, he must choose the only correct of the set and predict the course of the opponent’s thought.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={style.Staff_Main}>
        <Heading title={`OUR BOARD AND STAFF`} headline={`Our awesome creative team`} />

        <section className={style.Team_container}>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team1.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team2.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team3.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>

        </section>
        <section className={style.Team_container}>
          <div className={style.Team_card}>
          </div>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team4.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team5.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>
          <div className={style.Team_card}>
            <div className={style.Team_Img}>
              <img src="/assets/team6.webp" alt="" />
            </div>
            <div className={style.Team_details}>
              <h3>Mark Rufallo</h3>
              <span>President & chairman of the board</span>
            </div>
          </div>
        </section>
      </section>

      <section className={style.Teastimonial_about}>
        <Heading title={`TESTIMONIALS`} headline={`Kind words from our happy clients`} />

        <div className={style.Testimonial_card}>
          <div className={style.Testimonial_swiper}>
           <TestimonialsSlider />
          </div>
          <div className={style.Testimonial_img}>
            <img src="/assets/Testimonials_image.webp" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
