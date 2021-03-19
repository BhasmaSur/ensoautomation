import styles from '../contactus/contact.module.css';
export const CONTACT=()=>{
    return (
        <div className={styles.box}>
            <div>
                <p className={styles.heading1}>Contact Us</p>
            </div>
            <div>
            <p className={styles.heading2}>Lets talk about</p>
            <p className={styles.heading3}>What we can work, build and play.</p>
            </div>
            <div className={styles.lineBox}>
            <hr className={styles.lineBreak}></hr> 
            </div>
            <div className={styles.box2}>
            <div className="row">
            <div className="col-lg-4 col-xs-12">
                <div className={styles.leftMargin1}>
                <p className={styles.sectionHeading2}>Partner with Us</p>
                <p className={styles.sectionHeading1}>Santosh Dengle</p>
                <p className={styles.sectionContentRow}>Founder & Managing Director</p>
                <p className={styles.sectionContentRow}>+91-98906 92969</p>
                <p className={styles.sectionContentRow}>santoshdengle@ensoautomationindia.com</p>
                </div>
          

            </div>
            <div className="col-lg-4 col-xs-12">
                <div className={styles.leftMargin2}>
                <p className={styles.sectionHeading2}>Visit Us</p>
                <p className={styles.sectionHeading1}>Enso Automation</p>
                <p className={styles.sectionContentRow}>15, Eden Garden</p>
                <p className={styles.sectionContentRow}>Survey no. 167/168, Wakad</p>
                <p className={styles.sectionContentRow}>Pune, India - 411057</p>
                </div>

            </div>
            </div>
         </div>
        </div>
    )
}