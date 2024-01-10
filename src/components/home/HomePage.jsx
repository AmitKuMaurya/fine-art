import React from "react";
import styles from "./home.module.css";
import Rectangle18 from "../../assets/second_section_img/Rectangle18.png";
import Rectangle19 from "../../assets/second_section_img/Rectangle19.png";
import Rectangle20 from "../../assets/second_section_img/Rectangle20.png";
import Rectangle21 from "../../assets/second_section_img/Rectangle21.png";
import Rectangle44 from "../../assets/second_section_img/Rectangle44.png";
import Rectangle45 from "../../assets/second_section_img/Rectangle45.png";
import Rectangle46 from "../../assets/second_section_img/Rectangle46.png";
import Rectangle47 from "../../assets/second_section_img/Rectangle47.png";
import Rectangle48 from "../../assets/second_section_img/Rectangle48.png";
import Rectangle49 from "../../assets/second_section_img/Rectangle49.png";

// images for third floor

import Theme107 from "../../assets/third_section_imgs/Frame107.png";
import Theme108 from "../../assets/third_section_imgs/Frame108.png";
import Theme109 from "../../assets/third_section_imgs/Frame109.png";
import Theme110 from "../../assets/third_section_imgs/Frame110.png";

// images for fourth floor
import Vector0 from "../../assets/fourth_floor/Layer1.png";
import Vector1 from "../../assets/fourth_floor/Layer2.png";
import Vector2 from "../../assets/fourth_floor/Layer3.png";
import Vector3 from "../../assets/fourth_floor/layer4.png";

// fifth floor
import Rectangle80 from "../../assets/fifthFloor/Rectangle80.png";

import Profile1 from "../../assets/sixth_section/Profile1.png";
import Profile2 from "../../assets/sixth_section/Profile2.png";
import Profile3 from "../../assets/sixth_section/Profile3.png";

export const HomePage = () => {
  const images = [
    Rectangle18,
    Rectangle19,
    Rectangle20,
    Rectangle21,
    Rectangle44,
    Rectangle45,
    Rectangle46,
    Rectangle47,
    Rectangle48,
    Rectangle49,
  ];

  const thirdSectionImages = [
    { img: Theme107, name: "ABC Category 2023", quant: 28 },
    { img: Theme108, name: "ABC Category 2023", quant: 71 },
    { img: Theme109, name: "ABC Category 2023", quant: 57 },
    { img: Theme110, name: "ABC Category 2023", quant: 48 },
  ];

  const imagesForFourth = [
    { img: Vector0, desc: "Complete Packages For All Your Designs" },
    { img: Vector1, desc: "Over 10 Years Of Experience" },
    { img: Vector2, desc: "Expert Guides For You" },
    { img: Vector3, desc: "Guaranteed quality at the best price!" },
  ];

  const sixthFloorItem = [
    {
      img: Profile1,
      name: "Rohit Sain",
      desc: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      img: Profile2,
      name: "Maya Singh",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    },
    {
      img: Profile3,
      name: "Suraj Kumar",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeBanner}>
          <div className={styles.bannerContent}>
            <span>New Design</span>
            <span>December</span>
            <span>Value Pack</span>
            <span>cool / colorful / trendy</span>
            <button>Show Now</button>
          </div>
        </div>

        {/* Second Section */}

        <div className={styles.secondFloor}>
          {/* heading section */}
          <div className={styles.secondTop}>
            {/* top left section*/}
            <div>
              <span>Trends</span>
              <span>Trending Collections to Boost your Designs!</span>
            </div>
            {/* top right section */}
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                egestas mauris id efficitur fringilla. Duis convallis tempor
                mauris asdwedw.
              </span>
              <button>Explore Colletions</button>
            </div>
          </div>
          {/* bottom images */}
          <div className={styles.imageQueue}>
            {images.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>

        {/* thrid floor */}

        <div className={styles.thirdSection}>
          {/* top section */}
          <div className={styles.thirdTop}>
            <div>
              <div>CATEGORY</div>
              <div>Shop by the wide Range of Categories!</div>
            </div>
            <div> Explore Categories </div>
          </div>
          {/* bottom images sections */}
          <div className={styles.thirdImgSection}>
            {thirdSectionImages &&
              thirdSectionImages.map((ele) => {
                return (
                  <div>
                    <img src={ele.img} alt={ele.img} />
                    <div>{ele.name}</div>
                    <div>{ele.quant} rerources</div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* Fourth section */}

        <div className={styles.fouthFloor}>
          <div>
            {imagesForFourth &&
              imagesForFourth.map((ele) => {
                return (
                  <div>
                    <img src={ele.img} alt={ele.desc} />
                    <div>{ele.desc}</div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* fifth section */}

        <div className={styles.fifthFloor}>
          <div className={styles.fifthContent}>
            {/* left - content section */}
            <div>
              <p>ABOUT SHILPSAGA</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam
                egestas mauris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                egestas mauris id efficitur fringilla. Duis convallis tempor
                mauris. Sed porta, enim sit amet gravida venenatis, tortor lacus
                consequat libero, vel sagittis massa ante at velit.
              </p>
              <button>Know More</button>
            </div>
            {/* right image div */}
            <div>
              <img src={Rectangle80} alt={Rectangle80} />
            </div>
          </div>
        </div>

        {/* Sixth Section */}
        <div className={styles.sixthSection}>
          <h1>I Feedback</h1>
          <div className={styles.sixthSecContent}>
            {sixthFloorItem.map((ele) => {
              return (
                <div>
                  <img src={ele.img} alt={ele.name} />
                  <div>{ele.name}</div>
                  <div>{ele.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seventh Section of homopage */}

        <div className={styles.seventhFloor}>
          <h2>Recommended categories to stay inspired!</h2>
            <h3>Browse this selection of curated categories created for you.</h3>
            <div className={styles.seventhContnet}>

            </div>
        </div>
      </div>
    </>
  );
};