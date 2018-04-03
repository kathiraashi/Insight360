import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import * as CryptoJS from 'crypto-js';

import { CrmSettingsService } from './../../../../service/setting/crm-settings/crm-settings.service';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.css']
})
export class AccountTypeFormComponent implements OnInit {

  AccountTypeForm: FormGroup;
  disabled = false ;
  floatLabel = 'auto';
  values;
  Header;

  constructor(
      private Service: CrmSettingsService,
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<AccountTypeFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any ) {
        this.Header = this.data.Header;
       }

    ngOnInit() {

      if (this.data.type === 'Add') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl('', Validators.required)
        });
      }

      if (this.data.type === 'Edit') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl(this.data.value.Account_Type, Validators.required)
        });
      }

      if (this.data.type === 'View') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl({value: this.data.value.Account_Type, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }

    close() {
      this.dialogRef.close({Status: 'Close'});
    }

    submit() {

      const UserInfo = localStorage.getItem('Insight360');
      const CryptoBytes  = CryptoJS.AES.decrypt(UserInfo, 'SecretKeyOut@123');
      const ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));

      if (this.data.type === 'Edit' ) {
        const CreateData = {
                    Branch_Id: ResivingData.Branch_Id,
                    User_Id: ResivingData._id,
                    _Id: this.data.value._id,
                    Account_Type: this.AccountTypeForm.controls['accountType'].value
                  };
          const Info = CryptoJS.AES.encrypt(JSON.stringify(CreateData), 'SecretKeyIn@123');

          this.Service.AccountTypeUpdate({'info': Info.toString()})
          .subscribe( datas => {
            const data = JSON.parse(datas['_body']);
            if (data.Status === 'True' ) {
              const Crypto_Bytes  = CryptoJS.AES.decrypt(data.Responce, 'SecretKeyOut@123');
              const Resiving_Data = JSON.parse(Crypto_Bytes.toString(CryptoJS.enc.Utf8));
              this.dialogRef.close({Status: 'True', Responce: Resiving_Data});
            } else {
              this.dialogRef.close({Status: 'False', Message: data.Message });
            }
          });
      }


      if (this.data.type === 'Add') {
        const CreateData = {
                              Company_Id: ResivingData.Company_Id,
                              Branch_Id: ResivingData.Branch_Id,
                              User_Id: ResivingData._id,
                              Account_Type: this.AccountTypeForm.controls['accountType'].value
                            };
        const Info = CryptoJS.AES.encrypt(JSON.stringify(CreateData), 'SecretKeyIn@123');

        this.Service.AccountTypeCreate({'info': Info.toString()})
          .subscribe( datas => {
            const data = JSON.parse(datas['_body']);
            if (data.Status === 'True' ) {
              const Crypto_Bytes  = CryptoJS.AES.decrypt(data.Responce, 'SecretKeyOut@123');
              const Resiving_Data = JSON.parse(Crypto_Bytes.toString(CryptoJS.enc.Utf8));
              this.dialogRef.close({Status: 'True', Responce: Resiving_Data});
            } else {
              this.dialogRef.close({Status: 'False', Message: data.Message });
            }
          });
      }

    }

}
