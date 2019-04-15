import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from '../employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required]

    });
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.addForm.valid){
      this.employeeService.addEmployee(this.addForm.value);
      this.router.navigate(['']);
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
