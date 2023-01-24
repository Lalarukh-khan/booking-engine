import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  constructor(private bookingService: BookingService, private http: HttpClient) { }

  roomtypes: any;
  // errorMessage: String = "";
  ngOnInit(): void {
    this.showRoomTypes();
    // console.log("component is inited")

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // const body = { title: 'Angular POST Request Example' };
    // this.http.post<any>('https://backend.revroo.io/api/v1/booking-engine/get-hotels', body, { headers }).subscribe(roomtype => {
    //     this.roomtypes = roomtype.id;
    //     console.log(this.roomtypes);
    //     console.log("Room Types is inited");
    // });

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // const body = { title: 'Angular POST Request Example' };
    // this.http.post<any>('https://backend.revroo.io/api/v1/booking-engine/get-hotels', body, { headers }).subscribe({
    //     next: roomtype => {
    //         this.roomtypes = roomtype.id;
    //     },
    //     error: error => {
    //         this.errorMessage = error.message;
    //         console.error('There was an error!', error);
    //     }
    // })
  }
   
  showRoomTypes(){
    this.roomtypes = this.bookingService.listRoomTypes();
  }
}
