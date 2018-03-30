import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
          accountType: new FormControl(this.data.value.brand, Validators.required)
        });
      }

      if (this.data.type === 'View') {
        this.AccountTypeForm = new FormGroup({
          accountType: new FormControl({value: this.data.value.brand, disabled: true}, Validators.required)
        });
        this.disabled = true ;
        this.floatLabel = 'never';
      }

    }

    close() {
      this.dialogRef.close('Close');
    }

    submit() {
      if (this.data.type === 'Edit' ) {
        this.data.value.account_type = this.AccountTypeForm.value.accountType;
        this.dialogRef.close(this.data.value);
      }
      if (this.data.type === 'Add') {
        this.dialogRef.close(this.AccountTypeForm.value);
      }

    }

}
