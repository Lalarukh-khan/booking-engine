import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private httpClient: HttpClient) { }
  postTitle = [];
  listRoomTypes(){
    return this.httpClient.get<any>(environment.apiUrl).subscribe(res => {
      this.postTitle = res;
        console.log("this is postTitle:" + JSON.stringify(this.postTitle));
      });
  }
}