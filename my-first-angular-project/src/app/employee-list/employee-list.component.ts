import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :Employee[]= [
    new Employee("ahmed","shaheen","ahmedshaheen676@yahoo.com",1000),
    new Employee("amr","elbaz","amrelbaz12345@gmail.com",1000),
    new Employee("mohamed","elsayed","mohamedelsayed@gmail.com",1000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
