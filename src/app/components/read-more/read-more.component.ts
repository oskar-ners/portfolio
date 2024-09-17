import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-more',
  standalone: true,
  imports: [],
  templateUrl: './read-more.component.html',
  styles: `
  .read-more-container {
  p {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    margin-top: 5px;
    display: inline-block;
    font-family: "Michroma", sans-serif;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
  }
}
  `,
})
export class ReadMoreComponent {
  @Input() text: string = '';
  @Input() maxLength: number = 50;

  showMore: boolean = false;

  get displayText(): string {
    return this.showMore
      ? this.text
      : this.text.slice(0, this.maxLength) +
          (this.text.length > this.maxLength ? '...' : '');
  }

  toggleReadMore(): void {
    this.showMore = !this.showMore;
  }
}
