import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-admin.html',
  styleUrls: ['./contact-admin.css']
})
export class ContactAdmin {

  form = {
    subject: '',
    message: ''
  };

  sending = false;
  successMsg: string | null = null;

  onSubmit() {
    if (!this.form.subject || !this.form.message) {
      return;
    }

    this.sending = true;
    this.successMsg = null;

    setTimeout(() => {
      this.sending = false;
      this.successMsg = 'Votre message a bien été envoyé à l’administration.';
      this.form = { subject: '', message: '' };
    }, 500);
  }
}
