import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectThree.module.css'

export default function UseEffectThree(){
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>

        <main className={styles.main}>

        <Link 
        className={styles.home_link} 
        href="/">Home
        </Link>


    <section className={styles.contents}>

      <div><h2 
      className={styles.title}>useEffectThree</h2>
      </div>

      <div  
      className={styles.values}>{value}
      </div>

     <div><button 
     className={styles.button} 
     onClick={() => 
     setNumber(number + 1)}>Click to add 10</button>
     </div>

    </section>


        </main>
        
        </>
    )
}