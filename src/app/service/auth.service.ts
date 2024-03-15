import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }
  
  login(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(credential){
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));
        if(token){
          localStorage.setItem('token', token);
          this.tokenUpdateSubject.next();
          this.router.navigate(['/dashboard']);
        }
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage)
      });
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.tokenUpdateSubject.next();
    this.router.navigate(['/']);
  }

  private tokenUpdateSubject = new Subject<void>();

  // Subscribe to this method to get notified when the token updates
  onTokenUpdate(): Observable<void> {
    return this.tokenUpdateSubject.asObservable();
  }

}
