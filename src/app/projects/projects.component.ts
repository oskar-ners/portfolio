import { Component } from '@angular/core';
import { SlideShowComponent } from '../components/slide-show/slide-show.component';
import { ReadMoreComponent } from '../components/read-more/read-more.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SlideShowComponent, ReadMoreComponent],
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
  projectTwoImages: string[] = ['assets/images/project1/project1-1.png'];
  projectThreeImages: string[] = ['assets/images/project1/project1-2.png'];
  projectFourImages: string[] = ['assets/images/project1/project1-3.png'];

  projectOneDescription: string =
    'This is a comprehensive to-do application that integrates Firebase Authentication and Firestore Database to manage user accounts and store tasks. Users can register, log in, and update their usernames securely through Firebase Authentication. The to-do list functionality allows users to add, edit, and delete tasks, with all data stored in real-time in Firestore Database. Additionally, the app features a WeatherService where users can input a city name to get real-time weather information, making it a versatile tool for both task management and daily planning.';

  projectTwoDescription: string = 'Project two description';
  projectThreeDescription: string = 'Project two description';
  projectFourDescription: string = 'Project two description';
}
