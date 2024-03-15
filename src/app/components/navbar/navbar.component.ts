import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isMobileMenuOpen = false;
  logged_in: any = false;
  token:any
  local_data: string | null = "";
  user_details: any;
  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logged_in = this.is_logged_in();
    this.auth.onTokenUpdate().subscribe(() => {
      // Call your is_logged_in() method
      this.logged_in = this.is_logged_in();
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  login_google(){
    this.auth.login()
  }
  logout_google(){
    this.auth.logout()
  }

  is_logged_in():boolean{
    this.token = localStorage.getItem('token')
    this.local_data = localStorage.getItem('user')
    if(this.token && this.local_data){
      this.user_details = JSON.parse(this.local_data);
      console.log(this.user_details)
      if(this.user_details){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }

  goToDashboard(){
    this.router.navigate(['dashboard'])
  }
}
