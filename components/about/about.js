import styles from '../about/about.module.css';

export const ABOUT=()=>{
    return (
        <div className={styles.aboutBox}>
            <div className="row">
                <div className="col-lg-5 col-xs-12">
                    <h1 className={styles.aboutHeading}>About us</h1>
                </div>
                <div className="col-lg-7 col-xs-12">
                    <p className={styles.aboutContent}>The pursuit of <label className={styles.aboutBold}>perfection in automation</label> through creating a vision of 
                        transparency, trust & belief is the inspiration behind rise of Enso 
                        Automation.</p>
                        <p className={styles.aboutContent}> To us, perfection in automation means more than developing
                            the best solutions in industrial automation. It also means developing 
                            the best relationships – with our customers and partners as well as our 
                            employees and suppliers. Enso is sure, that keen foresight and entrepreneurial
                            courage will help Enso to rise into the ranks of top global players in industrial 
                            automation. An intuitive sense of market dynamics and emerging trends is going to
                            established us as a pioneer, leading the way with the most innovative technology 
                            on the market. We are aiming to become a global centre for machine and factory 
                            automation in coming years by strengthening our position of leadership and adding 
                            new momentum to shine through our impressive records of sustained growth.</p>
                        <p className={styles.aboutContent}><label className={styles.aboutBold}>Exceptional partnership</label></p>
                            <p className={styles.aboutContent2}>
                                We walk shoulder-to-shoulder with our customers through every phase of a
                                project, from concept to commissioning and follow through with outstanding after-sales
                                support. Our customers rely on our exceptional partnership and innovative solutions, and 
                                we take great pride in the trust we have earned.</p>
                    <div>
                <img
                    className={styles.aboutImage}
                    src="/images/component.png"
                    alt="First slide"
                    height="500"
                />
                </div>
           </div>
       </div>
        </div>
       
    )
}