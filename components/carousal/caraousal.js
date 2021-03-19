import Carousel from 'react-bootstrap/Carousel';
import styles from '../carousal/caraousal.module.css';


export const CARAOUSAL = () => {
    return (
        <div>
            <div className={styles.box1}>
                <p className={styles.box1data1}>
                    Our Mission
                </p>
                <p className={styles.box1data21}>
                Perfection in automation, through
                </p>
                <p className={styles.box1data22}>
                creating a vision of transparency, trust and belief.
                </p>
                <p className={styles.box1data3}>
                    Work. Build. Play. Lets work on our today to build a promising tomorrow, and play a part in completing our Enso;
                    the circle of togetherness.
                </p>
            </div>
            <div className={styles.caraouslBox}>
            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/c1.PNG"
                    alt="First slide"
                    height="650"
                />
               
                    <div className={styles.boxc1}>
                    <p className={styles.boxHeading}>Flexible automations to improve production efficiency</p>
                    <p className={styles.boxCaption}>Flexible Automation is a concept that allows a robotic cell
                     to be re-tasked quickly and easily allowing for multiple automation processes while requiring
                      minimal change over. The main challenge has been dealing with parts that are difficult to feed 
                      and those with high mix / low volume. Traditionally, for many of these applications, automation
                       has been cost prohibitive. Investing in automation with Re-deployable Assets now makes these 
                       applications feasible.</p>
                    </div>
                   
         
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/c2.PNG"
                    alt="Second slide"
                    height="650"
                />
    <div className={styles.boxc2}>
                    <p className={styles.boxHeading}>Innovative, high-performance solutions for complex process automations</p>
                    <p className={styles.boxCaption}>Reliable, easy-to-use still innovative solutions with responsive and expert services.</p>
                    <p className={styles.boxCaption2}>Your path to improved performance starts here.</p>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/c3.PNG"
                    alt="Third slide"
                    height="650"
                />

<div className={styles.boxc3}>
                    <p className={styles.boxHeading}>High technology, low-cost automations</p>
                    <p className={styles.boxCaption}>It is a technology that creates some degree of low-cost automation
                    services around the existing equipment, tool, methods and people using mostly standard components available
                    in the market.</p>
                    </div>
            </Carousel.Item>
        </Carousel>
            </div>
 
        </div>
       
    )
}

export default CARAOUSAL;

