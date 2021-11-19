// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.switchImage = this.switchImage.bind(this);
//     this.state = {
//       currentImage: 0,
//       images: [
//         "https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg",
//         "https://cdn.pixabay.com/photo/2020/11/25/09/30/girls-5775077_960_720.jpg",
//         "https://cdn.pixabay.com/photo/2020/04/20/18/10/cinema-5069314_960_720.jpg"
//       ]
//     };
//   }

//   switchImage() {
//     if (this.state.currentImage < this.state.images.length - 1) {
//       this.setState({
//         currentImage: this.state.currentImage + 1
//       });
//     } else {
//       this.setState({
//         currentImage: 0
//       });
//     }
//     return this.currentImage;
//   }

//   componentDidMount() {
//     setInterval(this.switchImage, 1000);
//   }

//   render() {
//     return (
//       <div className="slideshow-container">
//         <img
//           src={this.state.images[this.state.currentImage]}
//           alt="cleaning images"
//         />
//       </div>
//     );
//   }
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



// import React from 'react';

// const bg = () => {
//     const imgCount = 3;
//     const randomCount = (Math.floor(Math.random() * imgCount));
//     const imagesArray = ['https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg','https://freeforcommercialuse.net/wp-content/uploads/2021/03/msp_2102_7467.jpg'
//     ,'https://freeforcommercialuse.net/wp-content/uploads/2018/06/msp_1805_3274.jpg'];
   
//     let randomNumber = Math.floor(Math.random() * imagesArray.length)
//     console.log(randNumber)
//     const randomImg = document.getElementById('header-container')
//     randomImg.innerHTML = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    

//     return (  );
// }
 

// Code used in the movie database 
//         background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, 
//     rgba(var(--tmdbDarkBlue), 0) 100%), url('/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg');
      
//     }
  

export default ;