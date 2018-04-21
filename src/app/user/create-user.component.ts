import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeyValue } from '../Models/Common/KeyValue.Model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //gender = 'male';
  //isActive = false;

professions : KeyValue[] = [
{id:1,name:'Salaried'},
{id:2,name:'Businessman'}
];

  saveUser(userForm: NgForm): void {
    console.log(userForm);
  }

}
