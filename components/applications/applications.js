import styles from '../applications/applications.module.css';
export const APPLICATION=()=>{
    return (
        <div className={styles.box}>
            <div>
                <p className={styles.heading1}>Applications</p>
            </div>
            <div>
                <p className={styles.heading2}>Market-Specific Solutions</p>
            </div>
            <div className={styles.subheadingBox}>
                <p className={styles.heading3}>Design & development of automations right from, Process planning 
                sequence for the required TAKT time Lean manufacturing principles with Industry 4.0 readiness</p>
            </div>
            <div className={styles.lineBox}>
                <hr className={styles.lineBreak}></hr> 
            </div>
            <div className={styles.box2}>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-xs-12">
                        <p className={styles.sectionHeading}>Assembly Line automations</p>
                        <p className={styles.sectionContentRow}>Conveyor-ized assembly lines</p>
                        <p className={styles.sectionContentRow}>Off-line assembly cells</p>
                        <p className={styles.sectionContentRow}>Overhead or floor robots</p>
                        <p className={styles.sectionContentRow}>Vision guided robots</p>
                        <p className={styles.sectionContentRow}>Any feeders with vision</p>
                        <p className={styles.sectionContentRow}>Printing robots</p>
                        <p className={styles.sectionContentRow}>Mobile robots</p>
                    </div>
                <div className="col-lg-4 col-sm-12 col-xs-12">
                    <p className={styles.sectionHeading}>Manufacturing line automations</p>
                    <p className={styles.sectionContentRow}>Loading /unloading on machining lines</p>
                    <p className={styles.sectionContentRow}>Gantries-pneumatic / rotary servo / Linear servo</p>
                    <p className={styles.sectionContentRow}>Robotic Gantries for various component orientations</p>
                    <p className={styles.sectionContentRow}>Walking beams automations</p>
                    <p className={styles.sectionContentRow}>Robotic welding automation cell</p>
                    <p className={styles.sectionContentRow}>Laser welding machine-cartesian or robotic</p>
                    <p className={styles.sectionContentRow}>Laser cutting</p>
                </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
                <p className={styles.sectionHeading}>Inspection automations</p>
                <p className={styles.sectionContentRow}>Vision / Laser based</p>
                <p className={styles.sectionContentRow}>Conveyor-ized / stationary</p>
                <p className={styles.sectionContentRow}>Robotic</p>
                <p className={styles.sectionContentRow}>Laser marking</p>
            </div>
            </div>
            <div className={styles.sectionBreak}></div>
            <div className="row">
            <div className="col-lg-4 col-sm-12 col-xs-12">
                <p className={styles.sectionHeading}>Low-cost Automations for</p>
                <p className={styles.sectionContentRow}>Process improvement</p>
                <p className={styles.sectionContentRow}>Product improvement</p>
                <p className={styles.sectionContentRow}>Additive manufacturing</p>
                <p className={styles.sectionContentRow}>TPM implementation</p>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
                <p className={styles.sectionHeading}>Latest break-through technological automation modules & EOT’S</p>
                <p className={styles.sectionContentRow}>Robot hand</p>
                <p className={styles.sectionContentRow}>Haptic sensor</p>
                <p className={styles.sectionContentRow}>Mobile robot</p>
                <p className={styles.sectionContentRow}>Cleaning robot</p>
            </div>
                </div>
            </div>
         
        </div>
    )
}