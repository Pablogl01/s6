import { Component, OnInit } from '@angular/core';
import { dato } from './../datos';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  datos2 = dato;
  selected:number = 0;
  src:string = this.datos2[0].img;
  

  constructor() { }
  
  prev(){
    this.selected = this.datos2.findIndex(d => d.selected == true);
    if(this.selected!=0){
      this.datos2[this.selected].selected=false;
      this.datos2[this.selected-1].selected=true;
      this.src=this.datos2[this.selected-1].img;
    }
  }

  next(){
    this.selected = this.datos2.findIndex(d => d.selected == true);
    if(this.selected!=3){
      this.datos2[this.selected].selected=false;
      this.datos2[this.selected+1].selected=true;
      this.src=this.datos2[this.selected+1].img;
    }
  }

  ngOnInit(): void {
  }

}
