import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import swal from 'src/assets/sweetalert'

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

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.loading = true;
    this.error = null;

    this.auth.getToken(this.formLogin.value).subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.loading = false;
      this.route.navigate(['admin/invitaciones']);
    }, err => {
      if (err.status) {
        this.error = err;
      }
      this.loading = false;
    });
  }

}
