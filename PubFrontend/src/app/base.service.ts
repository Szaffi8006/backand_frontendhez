import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
apiUrl="http:127.0.0.1:8000/api/"

drinksSub=new BehaviorSubject<any>(null)
  constructor( private http:HttpClient){ }
    private downloadDrinks(){
      this.http.get(this.apiUrl+"drinks").subscribe
      (res:any)=>this.drinksSub.next(res.data)
    }

    

    private downloadDrink(drink:any){
      this.http.get(this.apiUrl+"drinks", drink).subscribe(
        (res:any)=>this.drinksSub.next(res.data)
    }
    
   private updateDrink(drink:any){
    this.http.put(this.apiUrl+"updatedrink/"+drink.id, drink).forEach
  }
}
