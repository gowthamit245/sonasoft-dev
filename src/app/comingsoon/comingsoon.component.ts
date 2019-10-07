import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

  constructor(private router: Router) { 
  } 

  ngOnInit() {
    setTimeout(()=>{   
      
this.router.navigate(['']); 
    
 }, 5000);


  }

}
