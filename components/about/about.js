import styles from '../about/about.module.css';

export const ABOUT=()=>{
    return (
        <div className={styles.aboutBox}>
<div className="row">
           <div className="col-lg-5 col-xs-12">
                <h1 className={styles.aboutHeading}>About us</h1>
           </div>
           <div className="col-lg-7 col-xs-12">
                <p className={styles.aboutContent}>The pursuit of <a className={styles.aboutBold}>perfection in automation</a> through creating a vision of 
                    transparency, trust & belief is the inspiration behind rise of Enso 
                    Automation. To us, perfection in automation means more than developing
                     the best solutions in industrial automation. It also means developing 
                     the best relationships – with our customers and partners as well as our 
                     employees and suppliers. Enso is sure, that keen foresight and entrepreneurial
                      courage will help Enso to rise into the ranks of top global players in industrial 
                      automation. An intuitive sense of market dynamics and emerging trends is going to
                       established us as a pioneer, leading the way with the most innovative technology 
                       on the market. We are aiming to become a global centre for machine and factory 
                       automation in coming years by strengthening our position of leadership and adding 
                       new momentum to shine through our impressive records of sustained growth.</p>
                       <p className={styles.aboutContent}><a className={styles.aboutBold}>Exceptional partnership</a></p>
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

{/* <div>
<div className={styles.heading}>
    <h1>About Us</h1>
</div>
<div className={styles.motto}>
    <p>lorems saj asuasf savhdasb jsadbasdjasdbjasbd jasdbajsd ajdbasjd dajsdhasjd asjdhasjdhasjdjasd asdjashduasdbas dajsdhasjdsad
    asdbasd saduusdyy sadjsadsa addkaioiasjdias dasidhasd adasuduasgda djasbdbassjd
    asdmaskdasndn dashdbashd asdvasda dueudndd fsfnsdfndsf  sdfjsdfsjdf
    asdnasjdas djasdyufberbf fjdsfsdbfjsdfjsdfj</p>
</div>
<div className={styles.pic}>
    <img  className="rounded-circle w-20"
        src="/images/profile.jpeg"
        alt="Third slide"
        height="200"/>
</div>
<div className={styles.details}>
    <h4>Mradul Mishra</h4>
</div>
<div className={styles.status}>
<h3>(Ex humara bajaj)</h3>
</div>
</div> */}