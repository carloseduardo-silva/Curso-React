import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";

//css
import styles from "./Home.module.css"

//components
import Nav from '../../components/Nav'

//hooks
import { useFetchDatas } from '../../hooks/useFetchDatas'





const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');
    const [imagesArr, setImagesArr] = useState([])


    const {datas, loading, error} = useFetchDatas('products')

    //carrousel slides
    const slideVariants = {
            hiddenRight: {
            x: "30%",
            opacity: 0,
            },
            hiddenLeft: {
            x: "-30%",
            opacity: 0,
            },
            visible: {
            x: "0",
            opacity: 1,
            
            transition: {
                duration: 0.7,
            },
            },
            exit: {
            opacity: 0,
            scale: 0.1,
            display:'none',
            transition: {
                duration: 0,
            },
            },
        };
    
    useEffect(() =>{
        setImagesArr(['https://www.shutterstock.com/image-vector/black-friday-sale-banner-poster-600nw-1191980107.jpg',
            "https://www.shutterstock.com/image-vector/black-friday-sale-banner-poster-600nw-1221698800.jpg"
        ])
        },[])

    
    function nextImage(){
    
        setDirection("left");
        setCurrentIndex((prevIndex) =>
        prevIndex + 1 === imagesArr.length ? 0 : prevIndex + 1

        );}
    

    function previousImage(){

    setDirection("right");
    setCurrentIndex((prevIndex) =>
    prevIndex - 1 < 0 ? imagesArr.length - 1 : prevIndex - 1
    );}
      

 
    

  return (
    <>
        <Nav/>

        <div className={styles.advertisement_container}>

            <span onClick={() => previousImage()} class="material-symbols-outlined back">arrow_back</span>

            <AnimatePresence>
                <motion.img 
                key={currentIndex}
                variants={slideVariants}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit" 
                src={imagesArr[currentIndex]} alt="camiseta" /> 
            </AnimatePresence>

            <span onClick={() => nextImage()} class="material-symbols-outlined forward">arrow_forward</span>

        </div>

        <div className={styles.shop_container}>
            <h1>Shop</h1>
           
            <div  className={styles.card_container}>

            {datas.map((data) =>(
                <Link to={`/products/${data.idProduct}`}>  
                <div key={data.idProduct} className={styles.card}>
                    <div className={styles.img_card}>
                        <img src={data.URLimage} alt="camiseta" />
                    </div>
                    <p> {data.name}</p>
                    <p> R${data.price},00</p>
                </div>
             </Link>


            ))}
               
            </div>

        </div>
        
    
    </>
  )
}

export default Home
