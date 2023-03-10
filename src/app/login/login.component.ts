import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  username: string;
  password: string;
} 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor(private router: Router){
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15)
      ]),
    });
  }

  get username() {
    return this.reactiveForm.get('name')!;
  }
  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.reactiveForm.value;
    this.router.navigate(['/home']);
    }


}
