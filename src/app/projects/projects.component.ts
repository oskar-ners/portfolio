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
  projectOneDescription: string =
    'This is a comprehensive to-do application that integrates Firebase Authentication and Firestore Database to manage user accounts and store tasks. Users can register, log in, and update their usernames securely through Firebase Authentication. The to-do list functionality allows users to add, edit, and delete tasks, with all data stored in real-time in Firestore Database. Additionally, the app features a WeatherService where users can input a city name to get real-time weather information, making it a versatile tool for both task management and daily planning.';

  projectTwoImages: string[] = [
    'assets/images/project2/project2-0.png',
    'assets/images/project2/project2-1.png',
    'assets/images/project2/project2-2.png',
    'assets/images/project2/project2-3.png',
  ];
  projectTwoDescription: string =
    'This project is a fully functional e-commerce platform built with Firebase, where users can browse products, place orders and everything is stored in Firestore Database. It features Firebase Authentication for user registration and login, Firestore for real-time data storage of products, users, and orders, and allows seamless order processing and shopping experience.';

  projectThreeImages: string[] = ['assets/images/project1/project1-2.png'];
  projectThreeDescription: string = 'Project two description';
  projectFourImages: string[] = ['assets/images/project1/project1-3.png'];
  projectFourDescription: string = 'Project two description';
}
