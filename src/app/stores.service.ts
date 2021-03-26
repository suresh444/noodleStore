import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private val = new BehaviorSubject({});
  constructor(private http:HttpClient) { }
  getStoreDetails(){
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json")
  }
  getImages(){
    return this.http.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json")
  }
  setdetailsVal(data){
    this.val.next(data)
    // console.log(this.val)
  }
  getDetailvalues():Observable<any>{
    return this.val.asObservable() 
  }
}
