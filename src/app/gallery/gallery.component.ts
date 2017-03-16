import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  // styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private slides:Array<any> = [];

  constructor() { 
    this._addNewSlides();
  } 

  private _addNewSlides() {
    this.slides.push(
      { src: 'images/slides/gal1-min.jpg' },
      { src: 'images/slides/gal2-min.jpg' },
      { src: 'images/slides/gal3-min.jpg' },
      { src: 'images/slides/gal4-min.jpg' },
      { src: 'images/slides/gal5-min.jpg' },
      { src: 'images/slides/gal6-min.jpg' },
      { src: 'images/slides/gal7-min.jpg' },
      { src: 'images/slides/gal8-min.jpg' },
      { src: 'images/slides/gal9-min.jpg' },
    )
  }

  ngOnInit() {
    console.log('ala ma kota')
  }

}
