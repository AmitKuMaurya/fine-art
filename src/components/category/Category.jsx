import React from 'react'
import styles from "./category.module.css"
import { images } from "../../constants/aboutus.constant";

export const Category = () => {
    return (
        <>
            <div className={`${styles.privacyContainer}`} >

                <div className={` ${styles.paddingb100}`}>
                    <div className={`${styles.heading}  ${styles.container}`}>Products by Category</div>
                    <div className={`${styles.margintb38}`}>

                        <div className={styles.container}>

                            <div key={1} className={`${styles.column} ${styles.gradient}`}>
                                {/* Your column content goes here */}
                                <div className={`${styles.disf} ${styles.marginb26}`}>Solid Prints</div>
                                <div className={styles.disf}>

                                    <img className={styles.topimg} src={images[0]} /></div>
                            </div>

                            <div key={1} className={`${styles.column} ${styles.gradient}`}>
                                {/* Your column content goes here */}
                                <div className={`${styles.disf} ${styles.marginb26}`}>Solid Prints</div>
                                <div className={styles.disf}>

                                    <img className={styles.topimg} src={images[0]} /></div>
                            </div>

                            <div key={1} className={`${styles.column} ${styles.gradient}`}>
                                {/* Your column content goes here */}
                                <div className={`${styles.disf} ${styles.marginb26}`}>Solid Prints</div>
                                <div className={styles.disf}>

                                    <img className={styles.topimg} src={images[0]} /></div>
                            </div>

                            <div key={1} className={`${styles.column} ${styles.gradient}`}>
                                {/* Your column content goes here */}
                                <div className={`${styles.disf} ${styles.marginb26}`}>Solid Prints</div>
                                <div className={styles.disf}>

                                    <img className={styles.topimg} src={images[0]} /></div>
                            </div>



                        </div>

                    </div>




                </div>

                <div>
                    <div className={`${styles.margin150} `}>


                        <div className={`${styles.heading}  ${styles.container}`}>Products by Trend</div>
                        <div className={`${styles.margint42} `}>
                            <div className={`${styles.heading2}  ${styles.container}`}>Apparel & Accessories</div>
                        </div>

                    </div>

                    <div className={`${styles.margin100} ${styles.content} ${styles.container} ${styles.margint25}`}>
                        <div className={styles.inlineflex}>

                            <div > <img className={styles.abtimg} src={images[2]} /></div>
                            <div className={`${styles.marginr25}`}></div>
                            <div >
                                <div className={styles.inlineflex}>
                                    <div> <img className={styles.csimg} src={images[2]} /></div>
                                    <div className={`${styles.marginr25}`}></div>
                                    <div><img className={styles.csimg} src={images[2]} /></div>
                                </div>
                                <div className={`${styles.margint25}`}><img className={styles.cmimg} src={images[2]} /></div>
                            </div>

                        </div>
                        <div className={`${styles.margint42} ${styles.btn} `}>
                            <div className={` ${styles.btnt} `}>See more</div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.mb150}`}>
                    <div className={`${styles.margin150}  `}>


                        <div className={`${styles.heading}  ${styles.container}`}>Products by Trend</div>
                        <div className={`${styles.margint42} `}>
                            <div className={`${styles.heading2}  ${styles.container}`}>Apparel & Accessories</div>
                        </div>

                    </div>

                    <div className={`${styles.margin100} ${styles.content} ${styles.container} ${styles.margint25}`}>
                        <div className={styles.inlineflex}>


                            <div >
                                <div className={styles.inlineflex}>
                                    <div> <img className={styles.csimg} src={images[2]} /></div>
                                    <div className={`${styles.marginr25}`}></div>
                                    <div><img className={styles.csimg} src={images[2]} /></div>
                                </div>
                                <div className={`${styles.margint25}`}><img className={styles.cmimg} src={images[2]} /></div>
                            </div>
                            <div className={`${styles.marginr25}`}></div>
                            <div > <img className={styles.abtimg} src={images[2]} /></div>



                        </div>
                        <div className={`${styles.margint42} ${styles.btn} `}>
                            <div className={` ${styles.btnt} `}>See more</div>
                        </div>
                    </div>


                </div>


            </div>





        </>
    )
}
