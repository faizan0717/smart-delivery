import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  currentPage: string = 'home';
  token:any
  local_data: string | null = "";
  user_details: any;
  logged_in: any = false;
  constructor(public auth:AuthService) { }

  
  ngOnInit() {
    localStorage.setItem('currentPage', this.currentPage)
    this.logged_in = this.is_logged_in(); 
    this.auth.onTokenUpdate().subscribe(() => {
      // Call your is_logged_in() method
      this.logged_in = this.is_logged_in();
    });
   }

   login_google(){
    this.auth.login()
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

}