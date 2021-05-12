import styles from "./footer.module.css";
import emailjs from "emailjs-com";

function sendEmailToAdmin(e){
  e.preventDefault()
  emailjs.sendForm('service_7a0ouhf','template_590uigs',e.target,'user_WwP7JqM13esjlQSGLhzfU')
    .then((result)=>{
      alert("Mail is sent successfully, our team will contact you soon");
    },(error)=>{
      alert("Somthing went wrong, retry please");
    })
  e.target.reset()
}
export const FOOTER = () => {
  return (
    <>
      <div className={styles.box}>
        <div className="row">
          <div className="col-lg-3 col-xs-12">
            <div className={styles.img}>
              <img
                src="/images/logo-footer.svg"
                alt="First slide"
                height="99px"
              />
            </div>
            <div className={styles.content1}>
              <p>
                Enso Automation is a leading automation design consultancy
                company with specialisations In domains like hospitality,
                military, automobiles. Known for their quick and reliable
                applications and end to end development.
              </p>
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
              <p>
                <a>Work</a>
              </p>
            </div>
            <div className={styles.content2}>
              <p>
                <a>Who we are</a>
              </p>
            </div>
            <div className={styles.content2}>
              <p>
                <a>Contact us</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className={styles.heading1}>
              <p>Contact Us</p>
            </div>
            <div className={styles.inputBox}>
                <div className="row">
                  <form onSubmit={sendEmailToAdmin}>
                    <div className="col-lg-6 col-xs-12">
                      <input
                        className={styles.inputField1}
                        placeholder="Enter your Name"
                        name="from_name"
                      ></input>
                      <input
                        className={styles.inputField1}
                        placeholder="Enter your Email"
                        name="from_email"
                      ></input>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                      <input
                        className={styles.inputField2}
                        placeholder="Talk to us here, type your message"
                        name="message"
                      ></input>
                      <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn}>
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
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
              <p className={styles.copyright}>
                2021 Enso Automation Pvt Ltd. All rights reserved
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12">
            <p className={styles.madeBy}>
              Made with{" "}
              <img src="/images/heart.svg" alt="First slide" height="12" />
              &nbsp; by Enso
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
