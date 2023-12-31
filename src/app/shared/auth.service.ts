import { HttpClient, HttpHeaderResponse, HttpHeaders ,HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from './user';
import { Observable, catchError, map, throwError } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class AuthService {

pointUrl:string='http://localhost:4000/api';
headers = new HttpHeaders().set('Content-type','application/json');


currentUser = {};
    constructor(private http:HttpClient, public router:Router){}

    //registerniy panel

    signUp(user:User):Observable<any>{
  let api = `${this.pointUrl}/register-user`;
  return this.http.post(api , user).pipe(catchError(this.handleError));

    }

// login ()
signIn(user:User){
    return this.http.post<any>(`${this.pointUrl}/signin`,user)
    .subscribe((res:any)=> {
localStorage.setItem('access_token',res.token);
this.getUserProfile(res._id).subscribe((res)=>{
    this.currentUser = res;
    this.router.navigate(['user-profil'+ res.msg._id]);
});
  // profil.......


    });
}
//tekshirsh

getToken(){
    return localStorage.getItem('access_token');
}

get isLoggedIn():boolean{
    let authToken = localStorage.getItem('access_token');
    return authToken !==null ? true : false;
}
// Exit
logout(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken == null){
        this.router.navigate(['login']);

    }
}
//  foydalanuvchi profili


//xatolik /error
handleError(error:HttpErrorResponse){
    let msg ='';
    if(error.error instanceof ErrorEvent){
  //server-error
  msg = error.error.message;
}
else {
    msg=`Error ${error.status}/nMessage: ${error.message}`;


}
return  throwError(msg);
}

// user profil

getUserProfile(id:any):Observable<any>{
    let api = `${this.pointUrl}/user-profile/${id}`;
    return this.http.get(api , {headers:this.headers}).pipe(
        map((res)=>{
            return res  || {};
        }),
        catchError(this.handleError)
    );
}
}