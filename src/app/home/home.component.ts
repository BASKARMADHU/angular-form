import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 array : any [] =[];

  constructor(public _getdata:UsersService) {
  }

  ngOnInit(): void {
    this.getdata ();
  }

  getdata(){
      this._getdata.getdata().subscribe( sub =>{
        console.log(sub,"get data from firebase");
        this.array.push(this._getdata.getdata);
      })
  }

}
