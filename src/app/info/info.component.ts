import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {SendMailServiceService} from "../services/services/send-mail-service.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public subscription: Subscription;
  constructor(private sendmailservice: SendMailServiceService,
              private fb: FormBuilder) { }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  ngOnInit() {
  }

  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );
  }

}
