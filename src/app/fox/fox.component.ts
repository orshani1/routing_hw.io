import { Component, OnInit } from '@angular/core';
import { FoxService } from '../services/fox.service';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  fox:any;
  constructor(private service:FoxService) {
      service.getFox().subscribe((x)=>{
        this.fox = x;
      })
   }  

  ngOnInit(): void {
  }


}
