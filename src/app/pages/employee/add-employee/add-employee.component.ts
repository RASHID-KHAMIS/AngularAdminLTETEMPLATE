import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  genderValue: any[] = [
    {value: 'Male'},
    {value: 'Female'},
  ];

  roleValue: any[] = [
    {value: 'Admin'},
    {value: 'User'},
  ];

  constructor(){}

  ngOnInit(): void {
  
  }

}
