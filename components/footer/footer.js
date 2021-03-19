import styles from './footer.module.css';

const giveAlertMessage = ()=>{
    //console.log("its working");
    alert("This functionality is under development, try to call or email us, mobile : +91-98906 92969, email : santoshdengle@ensoautomationindia.com");
}
export const FOOTER = () => {
    return (
        <>
       <div className={styles.box}>
           <div className="row">
               <div className="col-lg-3 col-xs-12">
                    <div className={styles.img}>
                    <img
                    className="d-block w-100"
                    src="/images/logo-footer.svg"
                    alt="First slide"
                    height="99px"
                />
                    </div>
                    <div className={styles.content1}>
                        <p>Enso Automation is a leading automation Design consultancy 
                            company with specialisations In domains like hospitality,
                             military, automobiles. Known for their quick and reliable 
                             applications and end to end development.</p>
                    </div>
                    <div className={styles.content1}>
                        <p>Email: info@ensoautomationindia.com</p>
                    </div>
               </div>
               <div className="col-lg-3 col-xs-12">
                   <div className={styles.heading1}>
                       <p>About</p>
                   </div>
                   <div className={styles.content2}>
                       <p><a>Work</a></p>
                   </div>
                   <div className={styles.content2}>
                       <p><a>Who we are</a></p>
                   </div>
                   <div className={styles.content2}>
                       <p><a>Contact us</a></p>
                   </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div className={styles.heading1}>
                       <p>Contact Us</p>
                       <div className={styles.inputBox}>
                        <div className="row">
                            <div className="col-lg-6 col-xs-12">
                                <input className={styles.inputField1} placeholder="Enter your Name"></input>
                                <input className={styles.inputField1} placeholder="Enter your Email"></input>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <input className={styles.inputField2} placeholder="Talk to us here, type your message"></input>
                                <div className={styles.btnBox}>
                                <button onClick={giveAlertMessage} className={styles.btn}>Send</button>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                   </div>   
                </div>
           </div>
        </div>
        <div className={styles.lineBox}>
        <hr className={styles.lineBreak}></hr> 
        </div>
        <div className={styles.bg}>
        <div className="row">
            <div className="col-lg-4 col-xs-12">
                <div className={styles.rightBox}>
                <p className={styles.copyright}>2021 Enso Automation Pvt Ltd. All rights reserved</p>
                    </div>
                
            </div>
            <div className="col-lg-4 col-xs-12">
                     <p className={styles.madeBy}>Made with <img
                     src="/images/heart.svg"
                     alt="First slide"
                     height="12"
                     />&nbsp;
                     by Tanmay Dengle</p>
             </div>
            </div>
        </div>
            
            </>
    )
}