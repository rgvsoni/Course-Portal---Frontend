import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // life cycle hook
    // load horyo yo hamesha call hoi
    // event binding (process like click) and property binding
  }

  fun() {
    console.log("Raghav")
  }

  
}
