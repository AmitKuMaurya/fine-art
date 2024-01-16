import React from 'react'
import styles from "./aboutUs.module.css"
import { images } from "../../constants/aboutus.constant";

export const AboutUs = () => {
  return (
    <>
      <div className={styles.privacyContainer}>

        <div className={` ${styles.paddingb100}`}>
          <div className={styles.heading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Curabitur mattis dignissim luctus. Morbi sed finibus<br />
            quam, eu feugiat augue. </div>
          <div className={`${styles.margintb53}`}>

            <div className={styles.container}>

              <div key={1} className={styles.column}>
                {/* Your column content goes here */}

                <div>
                  <img className={styles.topimg} src={images[0]} /></div>
              </div>

              <div key={2} className={styles.column}>
                {/* Your column content goes here */}

                <div>
                  <img className={styles.topimg} src={images[0]} /></div>
              </div>

              <div key={3} className={styles.column}>
                {/* Your column content goes here */}

                <div>
                  <img className={styles.topimg} src={images[0]} /></div>
              </div>

              <div key={4} className={styles.column}>
                {/* Your column content goes here */}

                <div>
                  <img className={styles.topimg} src={images[0]} /></div>
              </div>

              <div key={5} className={styles.column}>
                {/* Your column content goes here */}

                <div>
                  <img className={styles.topimg} src={images[0]} /></div>
              </div>

            </div>

          </div>




        </div>
        <div className={`${styles.margin50} ${styles.content}`}>

          <div className={styles.container2}>

            <div key={1} className={styles.column2}>

              <div className={`${styles.text2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

              </div>
              <div div className={`${styles.margin26} ${styles.divbox}`}></div>
              <div className={`${styles.head2}`}>15K +

              </div>
            </div>


            <div key={2} className={styles.column2}>

              <div className={`${styles.text2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

              </div>
              <div div className={`${styles.margin26} ${styles.divbox}`}></div>
              <div className={`${styles.head2}`}>200+

              </div>
            </div>

            <div key={3} className={styles.column2}>

              <div className={`${styles.text2}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.

              </div>
              <div div className={`${styles.margin26} ${styles.divbox}`}></div>
              <div className={`${styles.head2}`}>60+

              </div>
            </div>

          </div>
        </div>

        <div className={`${styles.margin100} ${styles.content}`}>
          <div className={styles.inlineflex}>
            <div > <img className={styles.abtimg} src={images[2]} /></div>
            <div className={`${styles.marginr37}`}></div>
            <div className={styles.block}>
              <div className={styles.head3}>what we do</div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

            </div>
          </div>
        </div>

        <div className={`${styles.margin100} ${styles.content}`}>
          <div className={styles.inlineflex}>

            <div className={styles.block}>
              <div className={styles.head3}>what we do</div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

            </div>
            <div className={`${styles.marginr37}`}></div>
            <div > <img className={styles.abtimg} src={images[3]} /></div>

          </div>
        </div>

        <div className={`${styles.margin100} ${styles.content}`}>
          <div className={styles.inlineflex}>
            <div > <img className={styles.abtimg} src={images[4]} /></div>
            <div className={`${styles.marginr37}`}></div>
            <div className={styles.block}>
              <div className={styles.head3}>what we do</div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

              <div className={`${styles.margin30}  ${styles.inlineflex}`}>
                <div className={` ${styles.test3}`}>~</div>

                <div className={`${styles.test3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis dignissim luctus. Morbi sed finibus quam, eu feugiat augue. Phasellus ac erat vel purus aliquam venenatis.</div>
              </div>

            </div>
          </div>
        </div>

      </div>





    </>
  )
}
