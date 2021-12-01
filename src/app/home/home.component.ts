import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  public show:boolean=false;
  

  constructor() { 

  }

  ngOnInit(): void {
  }

  start(){
    
    this.show = true;
    console.log(this.show);
  }



}
