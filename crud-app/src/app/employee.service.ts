import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from './EmployeeModel';
export const JsonFile = '../assets/sample.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private values:EmployeeModel[] = [
    {
      _id: 1, 
      firstName: "John", 
      lastName: "Smith", 
      email: "john.smith@gmail.com"
      birthday: "20. 07. 1997"
  }
];

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return  this.values;
  }

  getEmployeeById(id: Number){
    let itemIndex = this.values.findIndex(item => item._id == id);
    return this.values[itemIndex];
  }

  addEmployee(employee: EmployeeModel){
    let last:any = this.values[this.values.length-1];
    employee._id = last._id + 1;
    this.values.push(employee);
    return this.values;
  }

  deleteEmployee(id: Number){
    let itemIndex = this.values.findIndex(item => item._id == id);
    if (itemIndex !== -1) {
        this.values.splice(itemIndex, 1);
    }  
    return this.values;
  }

  updateEmployee(employee: EmployeeModel){
    let itemIndex = this.values.findIndex(item => item._id == employee._id);
    this.values[itemIndex] = employee;
    return this.values;
  }
}
