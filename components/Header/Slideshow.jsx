import * as React from 'react';
import styles from './style.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImagesArray = ['https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg',
'https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg',
'https://cdn.pixabay.com/photo/2020/11/25/09/30/girls-5775077_960_720.jpg',
'https://cdn.pixabay.com/photo/2018/10/26/11/14/tv-3774381_960_720.jpg',
'https://cdn.pixabay.com/photo/2017/07/27/15/24/movie-2545676_960_720.jpg']

const SlideShow = () => (
    <div className={styles.carousel} >
        <Carousel autoPlay infiniteLoop >
            {ImagesArray.map((image) => <img src={image}/>)}

        </Carousel>
    
    </div>
      );


export default SlideShow;