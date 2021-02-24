import styles from '../about/about.module.css';
export const ABOUT=()=>{
    return (
        <div>
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
        </div>
    )
}