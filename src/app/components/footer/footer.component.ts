import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  currPage: string | null;

  ngOnInit() {
    const curData = localStorage.getItem('currentPage') ;
    this.currPage = curData
  }

}
