import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  loading: boolean = false;
  error: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  onLogin() {
    this.loading = true;

    this.auth.getToken(this.formLogin.value).subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.loading = false;
    }, err => {
      this.error = err;
      this.loading = false;
    });
  }

}
