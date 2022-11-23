import { Router } from '@angular/router';
import { LoginService } from './../../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private service : LoginService,
    private router : Router) {

  }

  ngOnInit() {
    this.service.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  logout() {
    this.router.navigate(['smartentry/login'])
  }

}
