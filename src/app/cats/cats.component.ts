import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cat:any;
  constructor(private service:CatService) { 
     service.getCatDetails().subscribe((x)=>{
       this.cat = x;
     })
  }

  ngOnInit(): void {
  }

}
