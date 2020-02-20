import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
  sent = false;
  busy = false;
  error = false;
  message = 'Submit';
  constructor(private api:ApiService) { }

  sendForm() {
    this.busy = true;
    this.message = 'Sending...';
    console.log('this.contact: %o', this.contact);
    this.api.sendEmail(this.contact).then((res:any) => {
        this.busy = false;
        if (res.accepted) {
            this.message = 'Sent';
            this.sent = true;
        } else {
            this.error = true;
            this.message = 'Try Again';
        }
    });
  }

}
