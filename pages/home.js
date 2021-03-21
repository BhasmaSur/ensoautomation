import {TOOLBAR} from '../components/toolbar/toolbar';
import {CARAOUSAL } from '../components/carousal/caraousal';
import {FOOTER } from '../components/footer/footer';
import styles from '../styles/Home.module.css';
import { ABOUT } from '../components/about/about';
import { SERVICE } from '../components/services/services';
import { APPLICATION } from '../components/applications/applications';
import { CONTACT} from '../components/contactus/contact';
import { useRef } from 'react';
export const HOME = ()=>{

   const homeSection = useRef(null);
   const aboutSection = useRef(null);
   const servicesSection = useRef(null);
   const applicationSection = useRef(null);
   const contactSection = useRef(null);
   const scrollTest = (num) =>{
      switch(num){
         case 1 :
            window.scrollTo({
               top:homeSection.current.offsetTop,
               behavior:"smooth"
           });
           break;
         case 2 :
         window.scrollTo({
            top:aboutSection.current.offsetTop-120,
            behavior:"smooth"
         });
         break;
         case 3 :
         window.scrollTo({
            top:servicesSection.current.offsetTop-120,
            behavior:"smooth"
         });
         break;
         case 4 :
         window.scrollTo({
            top:applicationSection.current.offsetTop-120,
            behavior:"smooth"
         });
         break;
         case 5 :
         window.scrollTo({
            top:contactSection.current.offsetTop-120,
            behavior:"smooth"
         });
         break;
      }
      
   }

 return <>
 <div className={styles.bg} ref={homeSection}>
    <TOOLBAR navigatToFunction={scrollTest}/>
 </div>
    
     <CARAOUSAL />
     <div ref={aboutSection}>
      <ABOUT />
     </div>
     <div ref={servicesSection}>
     <SERVICE/>
     </div>
     <div ref={applicationSection}>
     <APPLICATION/>
     </div>
      <div ref={contactSection}>
      <CONTACT/>
      </div>
    
     <FOOTER/> 
     </>
    
}

export default HOME;