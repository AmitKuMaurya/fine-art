import React from 'react'
import styles from "./category.module.css"
import { images } from "../../constants/aboutus.constant";
import {
    imagesForFourth,
    SeventhFloorImgs,
    sixthFloorItem,
    thirdSectionImages,
    imgForFithFloor,
} from "../../constants/homepage.constant";

export const Cart = () => {
    return (
        <>
            <div className={`${styles.bgg} ${styles.bggt} `} >
                <div className={styles.db}>
                    <div className={` ${styles.bggt} ${styles.bggb}`} >Shilp<br></br>
                        Saga</div>
                    <div className={` ${styles.bggh}`} >Cart</div>
                </div>
            </div>

            <div className={`${styles.privacyContainer}`} >


                <div className={` ${styles.paddingb100}`}>
                    <div>

                        <div className={`${styles.margin100} ${styles.content} ${styles.container} ${styles.margint25}`}>
                            <div className={`${styles.df} ${styles.gap40}`}>
                                <div className={styles.tablecont}>

                                    <div className={styles.tabletext}>Product</div>
                                    <div className={styles.tabletext}>Price</div>
                                    <div className={styles.tabletext}>Color</div>
                                    <div className={styles.tabletext}>Subtotal</div>

                                </div>
                                <div className={styles.cartcont}>
                                    <div className={`${styles.cartheading} ${styles.margint25}`}>Cart Totals</div>
                                    <div className={` ${styles.margin100}`}>
                                        <div className={`${styles.df} ${styles.sa}`}>
                                            <div className={styles.carttextbold}>Subtotal</div>
                                            <div className={styles.carttext}>Rs. 2500.00</div>
                                        </div>
                                    </div>
                                    <div className={` ${styles.margint25}`}>
                                        <div className={`${styles.df} ${styles.sa}`}>
                                            <div className={styles.carttextbold}>Total</div>
                                            <div className={styles.carttextblue}>Rs. 2500.00</div>
                                        </div>
                                    </div>

                                    <div className={` ${styles.margint25} ${styles.df} ${styles.sa}`}>
                                        <div className={`${styles.bluebtn} ${styles.bluebtntext}`}>Check Out</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>





                </div>

            </div>


            <div className={`${styles.fouthFloor} ${styles.margin100}`}>
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


        </>
    )
}
