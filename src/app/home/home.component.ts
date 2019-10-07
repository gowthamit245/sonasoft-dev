import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    //images=[]
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
           width: '100%',
           height: '700px',
           thumbnails:false,
          //  imageAutoPlayPauseOnHover:true,
          // imageSize: 'NgxGalleryImageSize.Cover',
          imageAutoPlay: true,
          imageArrows:true,
          imageBullets:true,
          imageDescription:true,
          previewArrows:true,
          arrowPrevIcon:'fa fa-arrow-circle-left',
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '300px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];
    
    this.galleryImages = [
      {
          small: '',
          medium: 'assets/images/home/img2.PNG',
          big: '',
          description:'<div  >image1</div>'
          
      },
      {
          small: 'assets/images/home/img.png',
          medium: 'assets/images/home/img3.PNG',
          big: 'assets/images/home/news3.png',
          description:'image2'
      },
      {
          small: 'assets/images/home/image.png',
          medium: 'assets/images/home/img4.PNG',
          big: 'assets/images/home/news4.png',
          description:'image3'
      },
      {
        small: 'assets/images/home/img.png',
        medium: 'assets/images/home/img5.PNG',
        big: 'assets/images/home/news3.png',
        description:'image4'
    },
    {
      small: 'assets/images/home/img.png',
      medium: 'assets/images/home/img5.PNG',
      big: 'assets/images/home/news3.png',
      description:'image5'
  }

    ];
  }

}
