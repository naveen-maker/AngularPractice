import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    this.spread();

  }

  public spread() {


    // Spreading array into array    
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];

    console.log('arraySpread ', arr3);

    // Spredaing object into array
    const originalObject = { a: 1, b: 2 };

    const originalArray = [1, 2, 3];
    const copyArray = [...originalArray, ...Object.values(originalObject)];

    console.log('objectSpread ', copyArray);


    // Spreading object into object
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3, d: 4 }

    console.log('objectSprtead', obj2);

    //Create a copy of array and copy of object
    const original = [1,2,3];
    const copy = [...original];


    const originalObject1 = {a:1,b:2};
    const copyObject1 = {...originalObject1};

    console.log('copyObject',copyObject1);

  }

}


