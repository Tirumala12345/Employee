import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { EmployeeService } from '../employee.service';
import { EmployeeformService } from '../employeeform.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrl: './employeeform.component.css'
})
export class EmployeeformComponent {

  constructor(private employeeFormService:EmployeeformService) {}
  employee: Employee = {
    empId: '',
    name: '',
    designation: '',
    salary: 0
  }
    onSubmit(): void {
      console.log("Submitting employee:", this.employee); 
      this.employeeFormService.addEmployee(this.employee).subscribe(response => {
        console.log('Employee added successfully', response);
        // Reset form or provide feedback to the user
      }, error => {
        console.error('Error adding employee', error);
      });
    }
  }


