import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  currentPage: string = 'dashboard';

  constructor(public route:Router){}
  ngOnInit(){
    localStorage.setItem('currentPage', this.currentPage)
  }
  paths = [
    { title: 'Html', 
      description: 'Master you html skills',
      image: '../../../assets/paths/html_css.png',
      types:['HTML','CSS'],
      is_new:true,
      path_id:"dummy"
    },
    { title: 'Cobra', 
      description: 'Python for beginers',
      image: '../../../assets/paths/python.jpg',
      types:['Python'],
      is_popular:true,
      path_id:"python-path"
    },
    { title: 'Some shit', 
      description: 'i dont know whai i am doing',
      image: '../../../assets/paths/angular.jpg',
      types:['Angular'],
      path_id:"dummy"
    }
  ];

  goToPath(path_id:any){
    if(path_id)
    this.route.navigate(["path/"+path_id])
  }
}
