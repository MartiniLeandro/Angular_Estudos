import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar)


  return next(req).pipe( catchError((erro) => {
      console.log(erro)
      snackBar.open(erro.error.message,"fechar", {duration: 3000})

      return throwError(() => erro)
    }));
};
