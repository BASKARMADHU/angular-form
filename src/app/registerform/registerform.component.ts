import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
 
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

  userdetails :any =[]

  reactiveForm!: FormGroup;
  user: IUser;

  constructor(private router:Router,private _saveservice:UsersService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8)
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

  push(){
    
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
    this.userdetails.push(this.user);
    console.log(this.user);

    // save data from service file
      this._saveservice.savedata(this.userdetails).subscribe( sub => {
        console.log("successfly saved data",sub)
      })
    }

  }


