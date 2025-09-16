import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem("token")
  let authReq = req;

  if(token){
    authReq = req.clone({setHeaders: {Authorization: `Bearer ${token}`}})
  }

  return next(authReq);
};
