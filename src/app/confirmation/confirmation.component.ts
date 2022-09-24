import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName: String = '';
  adress: String = '';
  creditCardNumber: String = '';
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    alert('Thank You ${this.fullName} For Using our shopping Site ');
  }
  submitForm() {}
}
