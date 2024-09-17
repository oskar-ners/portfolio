import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [],
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
})
export class SlideShowComponent {
  @Input() images: string[] = [];
  currentIndex = 0;

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  get currentImage(): string {
    return this.images[this.currentIndex];
  }
}
