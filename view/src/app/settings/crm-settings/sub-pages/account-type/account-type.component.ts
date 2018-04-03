import { Component, OnInit } from '@angular/core';

import * as CryptoJS from 'crypto-js';

// Feture Modules
  import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
  import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';

// custome Modules

// popups
import { AccountTypeFormComponent } from '../../popups/account-type-form/account-type-form.component';
import { DeleteConfirmationComponent } from '../../../../common/popups/delete-confirmation/delete-confirmation.component';

// Services
import { CrmSettingsService } from './../../../../service/setting/crm-settings/crm-settings.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  ShowLoading: Boolean = true;
  UserData;
  Datas: any[] = [];

// ----------------------------------------------------   constructor ---------------------------------------------
   constructor( public dialog: MatDialog,
                public snackBar: MatSnackBar,
                private Service: CrmSettingsService,
                private snotifyService: SnotifyService
              ) {
                const UserInfo = localStorage.getItem('Insight360');
                const CryptoBytes  = CryptoJS.AES.decrypt(UserInfo, 'SecretKeyOut@123');
                this.UserData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));
               }

// ----------------------------------------------------   Snotify Config ---------------------------------------------
  snotifyConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({ global: { newOnTop: true } });
    return{
            bodyMaxLength: 50,
            titleMaxLength: 25,
            backdrop: -1,
            position: SnotifyPosition.centerTop,
            timeout: 3000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true
          };
  }

// ----------------------------------------------------   ngOnInight ---------------------------------------------
  ngOnInit() {
    const CreateData = {
                          Company_Id: this.UserData.Company_Id,
                          Branch_Id: this.UserData.Branch_Id,
                          User_Id: this.UserData._id,
                        };
    const Info = CryptoJS.AES.encrypt(JSON.stringify(CreateData), 'SecretKeyIn@123');

    this.Service.AccountTypeList({'info': Info.toString()})
          .subscribe( datas => {
            const data = JSON.parse(datas['_body']);
            const CryptoBytes  = CryptoJS.AES.decrypt(data.Responce, 'SecretKeyOut@123');
            const ResivingData = JSON.parse(CryptoBytes.toString(CryptoJS.enc.Utf8));
            this.Datas = ResivingData;
            this.ShowLoading = false;
          });
  }


// ----------------------------------------------------   Account Type Add ---------------------------------------------
        AddAccountType() {
          const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent,
            {disableClose: true, minWidth: '50%', position: {top: '100px'}, data: { Header: 'Account Type Creat Form', type: 'Add' } });
          AccountTypeDialogRef.afterClosed().subscribe(result => {
            if (result.Status === 'True' ) {
              this.Datas.splice(0 , 0, result.Responce);
              this.Datas = this.Datas.slice();
              this.snotifyService.success( 'New Account Type Successfully Created!', 'Success Message!', this.snotifyConfig());
            } else if (result.Status === 'False') {
              this.snotifyService.error( result.Message, 'Error Message!', this.snotifyConfig());
            }
          });
        }

// ----------------------------------------------------   Account Type Edit ---------------------------------------------
        EditAccountType(data: any) {
           const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent, {disableClose: true, minWidth: '50%',
           position: {top: '100px'}, data: { Header: 'Account Type Edit Form', type: 'Edit', value: data } });
           AccountTypeDialogRef.afterClosed().subscribe(result => {
            if (result.Status === 'True' ) {
              const index = this.Datas.findIndex(x => x._id === result.Responce._id);
              this.Datas[index] = result.Responce;
              this.Datas = this.Datas.slice();
              this.snotifyService.success( 'Account Type Successfully Updated!', 'Success Message!', this.snotifyConfig());
            } else if (result.Status === 'False') {
              this.snotifyService.error( result.Message, 'Error Message!', this.snotifyConfig());
            }
          });
        }

// ----------------------------------------------------   Account Type View ---------------------------------------------
        ViewAccountType(data: any) {
          const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent,
            { minWidth: '50%', position: {top: '100px'}, data: { Header: 'Account Type View', type: 'View', value: data } });
        }


// ----------------------------------------------------   Account Type Delete ---------------------------------------------
          DeleteConfirmation(data: any) {
            const DeleteConfirmationDialogRef = this.dialog.open( DeleteConfirmationComponent,
              { width: '400px', disableClose: true,  data: { Header: 'Delete Confirmation', value: data } });
            DeleteConfirmationDialogRef.afterClosed().subscribe(result => {
                if (result === 'Yes') {
                  const CreateData = {  Branch_Id: data.Branch_Id,
                                        User_Id: data._id,
                                        _Id: data._id
                                      };
                  const Info = CryptoJS.AES.encrypt(JSON.stringify(CreateData), 'SecretKeyIn@123');

                  this.Service.AccountTypeDelete({'info': Info.toString()})
                              .subscribe( datas => {
                                const Resiving_data = JSON.parse(datas['_body']);
                                if (Resiving_data.Status === 'True' ) {
                                  const index = this.Datas.findIndex(x => x._id === data._id);
                                  this.Datas.splice(index , 1);
                                  this.Datas = this.Datas.slice();
                                  this.snotifyService.success('Data Successfully Deleted!', 'Success Message!', this.snotifyConfig());
                                } else {
                                  this.snotifyService.error( Resiving_data.Message, 'Error Message!', this.snotifyConfig());
                                }
                              });
                } else {
                  this.snotifyService.error('Delete Confirmation "Rejected"!', 'Alert Message!', this.snotifyConfig());
                }
            });
        }
}
