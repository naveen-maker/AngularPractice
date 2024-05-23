import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    
    this.spread();

  }

  public spread(){
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr3 = [...arr1,...arr2];

    console.log('spread ',arr3);

  }

}


