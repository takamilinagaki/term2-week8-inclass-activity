import Link from "next/link"
import {useEffect, useState} from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne(){

    const [number, setNumber] = useState(0);

    useEffect(()=> {
        console.log(number);
        setNumber(number + 1)
    })

    return(
        <>

         <main 
         className={styles.main}>

           <Link 
           className={styles.home_link} 
           href="/">Home
           </Link>


        <section 
        className={styles.contents}>

            <div><h2 
            className={styles.title}>useEffectOne</h2>
            </div>

            <div 
            className={styles.numbers}>{number}
            </div>

        </section>
           
        </main>

           
        </>
    )
}