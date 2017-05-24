import { Component, OnInit, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  // styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  private slides:Array<any> = [];
  private time:any = 4000;
  private currentSlide: any;
  private element:HTMLElement;
  private activeSlide:any;
  private beforeSlide:any;
  private items:NodeListOf<any>;
  private transitionEvent:any;

  constructor(private _elementRef : ElementRef) {
    this.element = this._elementRef.nativeElement;
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

  private slide(index) {
    console.log('slide', index);
    let current = index;
    let next = index+1 === this.slides.length ? 0 : index + 1;
    // this.beforeSlide.style = 'background-image: url(' + this.slides[current]['src'] + ')';



    let activeCallback = () => {
      setTimeout(() => {
        // this.beforeSlide.classList.remove('out');
        this.activeSlide.classList.remove('active');
        this.activeSlide.removeEventListener(this.transitionEvent, activeCallback);
      }, this.time);
    }

    this.activeSlide.classList.add('active');
    // this.beforeSlide.classList.add('out');
    this.activeSlide.style = 'background-image: url(' + this.slides[next]['src'] + ')';

    this.activeSlide.addEventListener(this.transitionEvent, activeCallback);
  }

  private slide2(index) {
    console.log('slide', index);
    let current = index;
    let next = index+1 === this.slides.length ? 0 : index + 1;
    // this.beforeSlide.style = 'background-image: url(' + this.slides[current]['src'] + ')';

    let activeCallback = () => {
      setTimeout(() => {
        // this.beforeSlide.classList.remove('out');
        this.activeSlide.classList.remove('active');
        this.activeSlide.removeEventListener(this.transitionEvent, activeCallback);
      }, this.time);
    }

    this.activeSlide.classList.add('active');
    // this.beforeSlide.classList.add('out');
    this.activeSlide.style = 'background-image: url(' + this.slides[next]['src'] + ')';

    this.activeSlide.addEventListener(this.transitionEvent, activeCallback);
  }

  private _getItemByIdx(index) {
    var element = null;

    for (var i = 0; i < this.items.length; i++) {
      if (index === i) {
        element = this.items[i];
      }
    }

    return element;
  }

  public cycle() {
    console.log('get started!');
    this.currentSlide = 0;
    this.activeSlide = this.element.querySelector('.gallery-active-item');
    this.beforeSlide = this.element.querySelector('.gallery-before-item');
    this.items = this.element.querySelectorAll('.galery-items-wrapper .item');

    // this.activeSlide.classList.add('active');
    this.transitionEvent = this._whichTransitionEvent();

    this.slide(0);

    let index = 1;

    setInterval(() => {
      this.slide(index);

      if (index == this.slides.length-1) {
        index = 0;
      } else {
        index++;
      }
    }, this.time);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cycle();
  }

  private _whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  ngOnDestroy(){

  }

}
