import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit,AfterViewInit {

  constructor(private aroute:ActivatedRoute,private st:StoresService) { }
  id;
  storeData;
  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id']
    console.log(this.id)

    // this.aroute.queryParams.subscribe((data:ParamMap)=>{
    //   console.log(data)
    //   this.id=data.get("id")
    //   console.log(this.id)
    // })
    

      this.st.getDetailvalues().subscribe((data)=>{
        this.storeData=data
        console.log(this.storeData.Brand)
      })
    
  }
  ngAfterViewInit(){
    
  }

}
