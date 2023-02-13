import Carousel from "react-bootstrap/Carousel";
import styles from "../carousal/caraousal.module.css";

export const CARAOUSAL = () => {


  return (
    <div>
      <div className={styles.box1}>
        <div className={styles.box1data1}>
          <p className={styles.box1data1Content}>Our Mission</p>
        </div>
        <div className={styles.box1data2}>
          <p className={styles.box1data2Content}>
            Perfection in automation, through creating a vision of transparency,
            trust and belief.
          </p>
        </div>
        <div className={styles.box1data3}>
          <p className={styles.box1data3Content}>
            Work. Build. Play. Lets work on our today to build a promising
            tomorrow, and play a part in completing our Enso; the circle of
            togetherness.
          </p>
        </div>

        <div className={styles.caraouslBox}>
          <Carousel controls={true} indicators={true}>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/c1.PNG"
                alt="First slide"
              />
              <div className={styles.outerBox}>
                <div className={styles.boxc1}>
                  <p className={styles.boxHeading}>
                    Flexible automations to improve production efficiency
                  </p>
                </div>
                <div className={styles.boxc12}>
                  <p className={styles.boxCaption}>
                    Flexible Automation is a concept that allows a robotic cell
                    to be re-tasked quickly and easily allowing for multiple
                    automation processes while requiring minimal change
                    over. The main challenge has been dealing with parts that
                    are difficult to feed and those with high mix / low volume.
                    Traditionally, for many of these applications, automation
                    has been cost prohibitive. Investing in automation with
                    Re-deployable Assets now makes these applications feasible.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/c2.PNG"
                alt="Second slide"
              />
              <div className={styles.outerBox}>
                <div className={styles.boxc2}>
                  <p className={styles.boxHeading}>
                    Innovative, high-performance solutions for complex process
                    automations
                  </p>
                </div>
                <div className={styles.boxc22}>
                  <p className={styles.boxCaption}>
                    Reliable, easy-to-use still innovative solutions with
                    responsive and expert services. Your path to improved
                    performance starts here.
                  </p>
                </div>
              </div>
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/c3.PNG"
                alt="Third slide"
              />
              <div className={styles.outerBox2}>
                <div className={styles.boxc3}>
                  <p className={styles.boxHeading}>
                    High technology, low-cost automations
                  </p>
                </div>
                <div className={styles.boxc32}>
                  <p className={styles.boxCaption}>
                    It is a technology that creates some degree of low-cost
                    automation services around the existing equipment, tool,
                    methods and people using mostly standard components available
                    in the market.
                  </p>
                </div>
              </div>
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 3.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 4.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 5.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 6.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 7.png"
                alt="Third slide"
              />              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 8.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 9.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 10.png"
                alt="Third slide"
              />             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 11.png"
                alt="Third slide"
              />              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 12.png"
                alt="Third slide"
              />             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 13.png"
                alt="Third slide"
              />           
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 14.png"
                alt="Third slide"
              />             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={styles.imgHeight}
                src="/images/Frame 15.png"
                alt="Third slide"
              />            
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CARAOUSAL;
