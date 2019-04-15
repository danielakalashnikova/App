import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from '../employee.service';
import { Router } from "@angular/router";
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: EmployeeModel;
  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    let employeeId = localStorage.getItem("employeeId");
    if(!employeeId){
      alert("Something wrong!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: employeeId,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required]
    });

    let data = this.employeeService.getEmployeeById(Number(employeeId));
    this.editForm.patchValue(data);
  }

  get f() { return this.editForm.controls; }

  onSubmit(){
    this.submitted = true;
   
    if(this.editForm.valid){
      this.employeeService.updateEmployee(this.editForm.value);
      this.router.navigate(['']);
    }
  }

}
