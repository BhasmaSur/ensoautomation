import styles from '../services/services.module.css';

export const SERVICE=()=>{
    return (
        <div className={styles.serviceBox}>
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <h1 className={styles.serviceHeading}>Our Services</h1>
                    <p className={styles.serviceContent}>From conceptual design to after-sales service, we accompany our customers through every 
                    step of the way. Together we develop the hardware and software solutions that best satisfy their unique requirements and provide
                    them with a technological edge in their market.</p>
                    <p className={styles.serviceContent}>We assist in improvement of the processes & products, required during this journey of implementation of turn key automation projects.</p>
                    <p className={styles.serviceContent}>We also develop latest technological automation modules & EOAT's</p>
                </div>
                 <div className="col-lg-6 col-xs-12">
                     <div className={styles.rightBox}>
                        <p className={styles.serviceContent}><label className={styles.serviceBold}>We support almost all types of manufacturing industries like,</label></p>
                        <p className={styles.serviceContent3}>Forging & machining industries</p>
                        <p className={styles.serviceContent3}>Casting & machining industries</p>
                        <p className={styles.serviceContent3}>Press & fabrication industries</p>
                        <p className={styles.serviceContent3}>Surface treatment industries</p>
                        <p className={styles.serviceContent3}>Assembly & packaging industries</p>
                        <p className={styles.serviceContent3}>FMCG industries</p>
                        <p className={styles.serviceContent3}>Defence</p>
                        <p className={styles.serviceContent4}><label className={styles.serviceBold}>This is to develop turnkey automation solutions like,</label></p>
                        <p className={styles.serviceContent3}>Assembly line automations</p>
                        <p className={styles.serviceContent3}>Manufacturing line automations</p>
                        <p className={styles.serviceContent3}>Inspection automations</p>
                     </div>
                  
                </div>
           </div>
        </div>
       
    )
}