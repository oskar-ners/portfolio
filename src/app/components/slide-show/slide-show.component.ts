import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.scss',
})
export class SlideShowComponent implements AfterViewInit {
  slideIndex: number = 1;

  @Input({ required: true }) slides!: string[];

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  showSlides(n: number) {
    let slides = document.getElementsByClassName(
      'mySlides'
    ) as HTMLCollectionOf<HTMLElement>;
    console.log(slides);
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex - 1].style.display = 'block';
  }
}
