import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:string = 'ntk';
  password:string = 'test';

  constructor(private router: Router, private config: ConfigService) { }

  ngOnInit() {
  }

  login(){
    let credential = {
      userid: this.userid,
      password: this.password
    }
    this.config.loginAuth("/login", credential).subscribe(res =>{
      this.router.navigateByUrl("/main");
    });
  }
}
