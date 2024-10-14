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

  projectTwoImages: string[] = [
    'assets/images/project2/project2-0.png',
    'assets/images/project2/project2-1.png',
    'assets/images/project2/project2-2.png',
    'assets/images/project2/project2-3.png',
  ];

  projectThreeImages: string[] = [
    'assets/images/project3/project3-0.png',
    'assets/images/project3/project3-1.png',
    'assets/images/project3/project3-2.png',
    'assets/images/project3/project3-3.png',
  ];

  projectFourImages: string[] = ['assets/images/project1/project1-3.png'];

  projectOneDescription: string =
    'This is a comprehensive to-do application that integrates Firebase Authentication and Firestore Database to manage user accounts and store tasks. Users can register, log in, and update their usernames securely through Firebase Authentication. The to-do list functionality allows users to add, edit, and delete tasks, with all data stored in real-time in Firestore Database. Additionally, the app features a WeatherService where users can input a city name to get real-time weather information, making it a versatile tool for both task management and daily planning.';

  projectTwoDescription: string =
    'FireBlog is a dynamic blogging platform powered by Firebase Authentication and Firestore Database, where each user can create and manage their own personal blog. Easily publish posts with a title, description, and images, all updated in real-time. You can edit and delete your posts, as well as explore blogs from other users and leave comments on their content. FireBlog combines simplicity with powerful functionality, offering a seamless experience for sharing your thoughts and creativity with a wider community.';

  projectThreeDescription: string =
    'eCommerce platform that allows users to register and log in using Firebase Authentication. The application supports the full shopping process—from browsing products by category on the Product Listing Page (PLP) and viewing detailed information on the Product Detail Page (PDP), to adding items to the cart and wishlist, and completing the order through the Checkout process. Users can also search for products, and after making a purchase, they receive an order confirmation on the Order Confirmation page. In the Profile section, users can view their order history. All data related to categories, products, and user orders is stored in Firestore Database.';

  projectFourDescription: string = 'Project two description';
}
