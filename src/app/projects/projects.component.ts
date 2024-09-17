import { Component } from '@angular/core';
import { SlideShowComponent } from '../components/slide-show/slide-show.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SlideShowComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectOneImages: string[] = [
    'assets/images/project1/project1-0.png',
    'assets/images/project1/project1-1.png',
    'assets/images/project1/project1-2.png',
    'assets/images/project1/project1-3.png',
    'assets/images/project1/project1-4.png',
    'assets/images/project1/project1-5.png',
    'assets/images/project1/project1-6.png',
    'assets/images/project1/project1-7.png',
  ];
}
