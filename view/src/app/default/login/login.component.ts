import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AdminServiceService } from './../../service/admin-service/admin-service.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(private Service: AdminServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.LoginForm = new FormGroup({
      User_Email: new FormControl('', Validators.required),
      User_Password: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.LoginForm.valid) {
      const UserLoginData = {
                DB: 'Insight360_Admin',
                User_Email:  this.LoginForm.controls['User_Email'].value,
                User_Password:  this.LoginForm.controls['User_Password'].value,
              };
        const Info = CryptoJS.AES.encrypt(JSON.stringify(UserLoginData), 'SecretKeyIn@123');

        this.Service.UserValidate({'info': Info.toString()}).subscribe( datas => {
          if (datas['status'] === 200 && JSON.parse(datas['_body']).Status === 'True') {
            const data = JSON.parse(datas['_body']);
            // const CryptoBytes  = CryptoJS.AES.decrypt(data.Responce, 'SecretKeyOut@123');
            // const ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));
            localStorage.setItem('Insight360', data.Responce);
            this.snackBar.open( 'Login Status :', 'Success.', {
              panelClass: ['snack-bar-style-one-success'],
              horizontalPosition: 'center',
              duration: 3000,
              verticalPosition: 'top',
            });
            this.router.navigate(['Dashboard']);
          } else {
            this.snackBar.open( 'Login Status :', 'Failed ! ', {
              panelClass: ['snack-bar-style-one-error'],
              horizontalPosition: 'center',
              duration: 3000,
              verticalPosition: 'top',
            });
          }
        });
     } else {
      this.snackBar.open( 'Login Form :', 'Not Vaild ! ', {
        panelClass: ['snack-bar-style-one-error'],
        horizontalPosition: 'center',
        duration: 3000,
        verticalPosition: 'top',
      });
     }

  }

}
