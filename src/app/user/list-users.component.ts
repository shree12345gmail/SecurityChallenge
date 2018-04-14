import { Component, OnInit } from '@angular/core';
import {} from '../Models/User';
import { User } from '../Models/User/User.Model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

users :User[] = 
[
  {
    id: 1,
    firstName: 'Mark',
    lastName:'Henry',
    gender: 'Male',
    email: 'mark@pragimtech.com',
    contactNumber:9876543210,
    dateOfBirth: new Date('10/25/1988'),
    isActive: true,
    photoPath: 'assets/images/mark.png'
  },
  {
    id: 2,
    firstName: 'Mary',
    lastName:'Nair',
    gender: 'Female',
    email:'Mary@abc.com',
    contactNumber: 2345978640,
    dateOfBirth: new Date('11/20/1979'),
    isActive: false,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 3,
    firstName: 'John',
    lastName:'cena',
    gender:'Male',
    email:'John@bkc.com',
    contactNumber: 5432978640,
    dateOfBirth: new Date('3/25/1976'),
    isActive: true,
    photoPath: 'assets/images/john.png'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
