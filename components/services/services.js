import styles from '../services/services.module.css';

export const SERVICE=()=>{
    return (
        <div className={styles.aboutBox}>
<div className="row">
           <div className="col-lg-7 col-xs-12">
                <h1 className={styles.aboutHeading}>Our Services</h1>
                <p className={styles.aboutContent}>From conceptual design to after-sales service, we accompany our customers through every 
                step of the way. Together we develop the hardware and software solutions that best satisfy their unique requirements and provide
                them with a technological edge in their market.</p>
                <p className={styles.aboutContent2}>We assist in improvement of the processes & products, required during this journey of implementation of turn key automation projects.</p>
                <p className={styles.aboutContent}>We also develop latest technological automation modules & EOAT's</p>
           </div>
           <div className="col-lg-5 col-xs-12">
                <p className={styles.aboutContent}><a className={styles.aboutBold}>We support almost all types of manufacturing industries like,</a></p>
                <p className={styles.aboutContent3}>Forging & machining industries</p>
                <p className={styles.aboutContent3}>Casting & machining industries</p>
                <p className={styles.aboutContent3}>Press & fabrication industries</p>
                <p className={styles.aboutContent3}>Surface treatment industries</p>
                <p className={styles.aboutContent3}>Assembly & packaging industries</p>
                <p className={styles.aboutContent3}>FMCG industries</p>
                <p className={styles.aboutContent3}>Defence</p>
                <p className={styles.aboutContent}><a className={styles.aboutBold}>This is to develop turnkey automation solutions like,</a></p>
                <p className={styles.aboutContent3}>Assembly line automations</p>
                <p className={styles.aboutContent3}>Manufacturing line automations</p>
                <p className={styles.aboutContent3}>Inspection automations</p>
       </div>
           </div>
       
        </div>
       
    )
}