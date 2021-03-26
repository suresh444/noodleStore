import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-stores',
  templateUrl: './display-stores.component.html',
  styleUrls: ['./display-stores.component.css']
})
export class DisplayStoresComponent implements OnInit {
  title = 'noodleStore';
  constructor(private st:StoresService,private fb: FormBuilder,private router:Router){

  }
  storesData;
  storeImages;
  show;
  searchForm: FormGroup;
  filteredData;
  // searchval;
  stars: number[] = [1, 2, 3, 4, 5];
  ngOnInit(){

    this.searchForm = this.fb.group({
      'searchval': [null,Validators.required]
    });
    
    this.searchForm.get('searchval').valueChanges.subscribe(val => {
      console.log(val)
      this.filteredData=this.storesData
      this.filteredData=  
      this.storesData.filter((a)=>{
        console.log(a.Brand.includes(val))
        return a.Brand.toLowerCase().includes(val.toLowerCase())
      })
      
    });
    this.st.getImages().subscribe((data)=>{
      this.storeImages=data;
      // this.show = this.storeImages[Math.floor(Math.random() *this.storeImages.length)];
    })
    this.st.getStoreDetails().subscribe((data:any[])=>{
      
    
      this.storesData=data.map(item=>{
      
        let obj = {
          
            "Brand": item.Brand,
            "Variety": item.Variety,
            "Style": item.Style,
            "Country": item.Country,
            "Stars": item.Stars,
            // "Top Ten": `${item.Top Ten}`
          "image": this.storeImages[Math.floor(Math.random() *this.storeImages.length)]
        }
        return obj
      });
      // console.log(this.storesData)
      this.filteredData=this.storesData
    })

    
  }
  setData(item,i){
    this.router.navigate(['details',i])
    this.st.setdetailsVal(item)
  }
}
