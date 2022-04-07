import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogService } from '../services/dog.service';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogDetails:any = {

  };
  showDog:boolean = false;
  constructor(private service:DogService) {
    this.dogDetails = service.getDogPic().subscribe((x)=>
    {
      this.dogDetails = x;
    });
   }

  ngOnInit(): void {
  }
  showDogPic(){
    console.log(this.dogDetails);
    this.showDog = !this.showDog;
  }

}
