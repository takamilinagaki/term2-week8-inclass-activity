import Image from "next/image"
import { useState } from "react";
import styles from '../carousel/Carousel.module.css'

export default function Carousel(){

 const [img, setImg] = useState(0);

 const changeImage = (change) => {
       if(change == "backward"){
        setImg(img -1);

        if(img == 0){
            setImg(5);
        }
        console.log(img);
       } else if (change == "forward"){
        setImg(img + 1);
        if(img == 5){
            setImg(0)
        }
        console.log(img)
       }
 }
    return(
       <>


        <div style={{
               backgroundImage: "url(/carousel-images/" + img + ".jpg)",
               backgroundSize: 'cover',
               backgroundRepeat: "no-repeat",
               width: 800,
               height: 600
        }}>
            
            <div className={styles.leftArrow}>

            <Image
            src={"/icons/leftArrow.png"}
            alt={"/icons/leftArrow.png"}
            width={30}
            height={30}
            onClick={()=> changeImage("backward")}
            />
            </div>
            

            <div className={styles.rightArrow}>

            <Image
       
            src={"/icons/rightArrow.png"}
            alt={"/icons/rightArrow.png"}
            width={30}
            height={30}
            onClick={()=> changeImage("forward")}
            />

            </div>
           
        </div>
        
       </> 
    )
}