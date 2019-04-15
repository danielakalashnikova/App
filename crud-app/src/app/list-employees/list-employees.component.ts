import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeModel } from '../EmployeeModel';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: EmployeeModel[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employees = this.employeeService.getAllEmployees();
  };

  addEmployee(): void {
    this.router.navigate(['add-employee']);
  }

  deleteEmployee(employee: EmployeeModel){
    
    this.employeeService.deleteEmployee(employee._id);
    this.router.navigate(['']);
  }

  updateEmployee(employee: EmployeeModel){
    localStorage.removeItem("employeeId");
    localStorage.setItem("employeeId", (employee._id).toString());
    this.router.navigate(['edit-employee']);
  }

}
