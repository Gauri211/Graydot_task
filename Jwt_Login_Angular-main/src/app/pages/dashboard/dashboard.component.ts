import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users: any[]=[];
  constructor(private http: HttpClient){
    this.loadUsers();
  }

  loadUsers() {
    debugger;
    this.http.get('https://tourmaline-pudding-ddf800.netlify.app/').subscribe((res:any)=>{
      this.users = res.data;
    })
  }
}
