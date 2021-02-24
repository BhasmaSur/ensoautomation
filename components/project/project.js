import styles from '../project/project.module.css';
export const PROJECT = () => {
    return (
        <div>
            <div className={styles.heading}>
                <h1>Products</h1>
            </div>
            <div className={styles.productbox}>
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
                                <img src="/images/home.PNG" alt="..." className="img-thumbnail"/>
                            </div>
                            <div className={styles.productData}>
                                <div className={styles.productHeading}>
                                    <h3>Residential Design</h3>
                                </div>
                                <div className={styles.productDescription}>
                                    <p>lore asd nasbdha ashvdhasvd hasdvasdv hasdvhasdv</p>
                                </div>
                                <div className={styles.productButtons}>
                                    <span>
                                        <button className="btn btn-primary">
                                            See projects
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
                                <img src="/images/security.PNG" alt="..." className="img-thumbnail"/>
                            </div>
                            <div className={styles.productData}>
                                <div className={styles.productHeading}>
                                    <h3>Commercial Design</h3>
                                </div>
                                <div className={styles.productDescription}>
                                    <p>lore asd nasbdha ashvdhasvd hasdvasdv hasdvhasdv</p>
                                </div>
                                <div className={styles.productButtons}>
                                    <span>
                                        <button className="btn btn-primary">
                                            See projects
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.productItem}>
                            <div className={styles.productImage}>
                                <img src="/images/lighting.PNG" alt="..." className="img-thumbnail"/>
                            </div>
                            <div className={styles.productData}>
                                <div className={styles.productHeading}>
                                    <h3>Experimental Design</h3>
                                </div>
                                <div className={styles.productDescription}>
                                    <p>lore asd nasbdha ashvdhasvd hasdvasdv hasdvhasdv</p>
                                </div>
                                <div className={styles.productButtons}>
                                    <span>
                                        <button className="btn btn-primary">
                                            See projects
                                    </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PROJECT;