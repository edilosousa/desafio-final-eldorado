import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login:string = '';
  senha:string = '';

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.autenticar(this.login, this.senha).subscribe(response => {
      // const token = response.content.token
      // localStorage.setItem('token', token)
      this.router.navigate(['/home']);
    })
  }

  logar(): void {
    // this.lo:ginService.autenticar(this.login, this.senha).subscribe(response => {
      // const token = response.content.token
      // localStorage.setItem('token', token)
    // })
  }

}
