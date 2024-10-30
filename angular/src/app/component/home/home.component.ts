import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeInputComponent{
  cookieService = inject(CookieService)
  toaster = inject(ToastrService)

  tokenInput = this.cookieService.get('token');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const token = form.value.token;
    this.cookieService.set('token', token);
    this.toaster.success('Token set successfully!', 'Success!', {
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
    });
  }
}
