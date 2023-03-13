import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
interface IUser {
  name: string;
  password: string;
  number: Number;
} 

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})


export class RegisterformComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor(private router:Router) {
    this.user = {} as IUser;
    
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15)
      ]),
      number: new FormControl(this.user.number,[
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }
  get password() {
    return this.reactiveForm.get('password')!;
  }
  get number() {
    return this.reactiveForm.get('number')!;
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


