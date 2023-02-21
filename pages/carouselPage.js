import Carousel from "@/components/carousel"
import Link from "next/link"
import styles from '@/styles/CarouselPage.module.css'

export default function carouselPage(){
    return(
        <>

        <main 
        className={styles.main}>

          <Link 
          className={styles.home_link} 
          href="/">Home</Link>

           <div 
           className={styles.carousel}>
           <Carousel/></div>

        </main>
         
        </>
    )
}