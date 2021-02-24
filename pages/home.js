import {TOOLBAR} from '../components/toolbar/toolbar';
import {CARAOUSAL } from '../components/carousal/caraousal';
import {FOOTER } from '../components/footer/footer';
import { TEST } from '../components/test/test';
import { PROJECT } from '../components/project/project';
import styles from '../styles/Home.module.css';
import { ABOUT } from '../components/about/about';

export const HOME = ()=>{
 return <>
 <div className={styles.bg}>
    <TOOLBAR/>
 </div>
    
     <CARAOUSAL/>
     <ABOUT/>
    <PROJECT/>
     <FOOTER/> 
     {/* <TEST/> */}
     </>
    
}

export default HOME;