import { Component, OnInit } from '@angular/core';

// Feture Modules
  import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

// custome Modules

// popups
import { AccountTypeFormComponent } from '../../popups/account-type-form/account-type-form.component';
import { DeleteConfirmationComponent } from '../../../../common/popups/delete-confirmation/delete-confirmation.component';

// Services

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  ShowLoading: Boolean = true;
  Datas: any[] = [
    {'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff'},
    {'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345'},
    {'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr'},
    {'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh'},
    {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34'},
    {'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj'},
    {'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr'},
    {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34'},
    {'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5'},
    {'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s'}
  ];

   constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    setTimeout(() => {
      this.ShowLoading = false;
    }, 5000);
  }
        AddAccountType() {
          const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent,
            { minWidth: '50%', position: {top: '100px'}, data: { Header: 'Account Type Creat Form', type: 'Add' } });
          AccountTypeDialogRef.afterClosed().subscribe(result => { console.log(result); } );
        }
        EditAccountType(data: any) {
           const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent,
            { minWidth: '50%', position: {top: '100px'}, data: { Header: 'Account Type Edit Form', type: 'Edit', value: data } });
           AccountTypeDialogRef.afterClosed().subscribe(result => { console.log(result); } );
        }
        ViewAccountType(car) {
          const AccountTypeDialogRef = this.dialog.open( AccountTypeFormComponent,
            { minWidth: '50%', position: {top: '100px'}, data: { Header: 'Account Type View', type: 'View', value: car } });
        }


          DeleteConfirmation(data: any) {
            const DeleteConfirmationDialogRef = this.dialog.open( DeleteConfirmationComponent,
              { width: '400px', disableClose: true,  data: { Header: 'Delete Confirmation', value: data } });
            DeleteConfirmationDialogRef.afterClosed().subscribe(result => this.returnDeleteConfirmation(result));
          }


         returnDeleteConfirmation(result) {

          if (result === 'Yes') {
            this.snackBar.open( 'Account Type Data, Delete Confirmation :', 'Confirmed ! ', {
              panelClass: ['snack-bar-style-one-success'],
              horizontalPosition: 'center',
              duration: 5000,
              verticalPosition: 'top',
            });
          } else {
            this.snackBar.open( 'Account Type Data, Delete Confirmation :', 'Rejected ! ', {
              panelClass: ['snack-bar-style-one-error'],
              horizontalPosition: 'center',
              duration: 5000,
              verticalPosition: 'top',
            });
          }
        }
}
