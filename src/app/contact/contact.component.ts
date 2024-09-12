import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.showMessageSent = true;
      form.resetForm();
      setTimeout(() => {
        this.showMessageSent = false;
      }, 5000);
    }
  }
}
