import React from "react";
import styles from "./home.module.css";
import {
  images,
  imagesForFourth,
  SeventhFloorImgs,
  sixthFloorItem,
  thirdSectionImages,
  imgForFithFloor,
} from "../../constants/homepage.constant";

export const HomePage = () => {
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
              <img src={imgForFithFloor} alt={imgForFithFloor} />
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
          <div>
            <span>Recommended categories</span> to stay inspired!
          </div>
          <div>
            Browse this selection of curated categories created for you.
          </div>
          <div className={styles.seventhContnet}>
            {SeventhFloorImgs &&
              SeventhFloorImgs?.map((ele) => (
                <img src={ele?.img} alt={ele.img} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
