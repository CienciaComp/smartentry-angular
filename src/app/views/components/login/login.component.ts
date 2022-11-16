import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  nomeUsuario:string;
  senha:string;

  constructor(private service:LoginService, private router : Router) { }

  ngOnInit(): void {
  }


  doLogin() {
    let resp = this.service.login(this.nomeUsuario, this.senha);
    resp.subscribe(data=>{
      console.log(data)
    this.router.navigate(['smartentry/home'])
    })
  }
}
