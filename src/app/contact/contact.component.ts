import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';
  showMessageSent: boolean = false;

  onSubmit(form: NgForm, e: Event): void {
    if (form.valid) {
      emailjs
        .sendForm(
          'service_1p6i1pj',
          'template_tbp4l7k',
          e.target as HTMLFormElement,
          'cXkHo2k66HMGWwQsE'
        )
        .then(() => {
          this.showMessageSent = true;
          form.resetForm();
          setTimeout(() => {
            this.showMessageSent = false;
          }, 5000);
        });
    }
  }
}
