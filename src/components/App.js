import React from 'react';
import '../App.css'; 
import Selected from './Selected';
import Gallery from './Gallery';

const img1 = 'https://photos-4.dropbox.com/t/2/AADKJw4QPoESCERyMtV9SIgjPXCuyHknIuLYO-ZN6bxXXA/12/850150464/jpeg/32x32/3/1529528400/0/2/cat4.jpg/EMDcsJ4JGJYhIAcoBw/J6BbSAoa5jopz1pgzpAMw7aOoaMsYvUEeqZIqcRdSts?dl=0&size=1600x1200&size_mode=3';
const img2 = 'https://photos-6.dropbox.com/t/2/AACWCn8L_vfO9s3JAD1JmWuZmhpOJxauzkqvRqTkEQmBOg/12/850150464/jpeg/32x32/3/1529528400/0/2/cat7.jpg/EMDcsJ4JGJYhIAcoBw/iJYkKH5T3wwanyQyCbpo_WC-VmVk8RP-BMQ_mjm00vs?dl=0&size=1600x1200&size_mode=3';
const img3 = 'https://photos-2.dropbox.com/t/2/AACnugy6N7Z77UBz-0SJKR4ncYKCZQLmaVO50ekNax8kaw/12/850150464/jpeg/32x32/3/1529524800/0/2/cat1.jpg/EMDcsJ4JGJYhIAcoBw/TUdUbSmSJn9O0paamGy_VSNzGaECAJ7zwPV5oLVWqJ4?dl=0&size=1600x1200&size_mode=3';
const img4 = 'https://photos-5.dropbox.com/t/2/AAAyY_AB8NEJSTKAzUAViMX1hj7vxNokDJ72mfx6AMchdg/12/850150464/jpeg/32x32/3/1529524800/0/2/cat2.jpg/EMDcsJ4JGJYhIAcoBw/5qs6s6fndI-SVXzIQ1h90iO464qrDhIUyllfS7mcxhM?dl=0&size=1600x1200&size_mode=3';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        imageNumber: 2,
        gallery: [img1, img2, img3, img4]
    };
  }

 updateSelectedImage(imageNumber){
   this.setState({
      imageNumber
   }); 
 }

  render(){
    console.log(this.state.imageNumber);
    return(
      <div>
        <Selected selected={this.state.gallery[this.state.imageNumber]}/>
        <Gallery
         gallery={this.state.gallery}
         onImageClick= {number=> this.updateSelectedImage(number)}
        />
      </div>
    );
  }
}


