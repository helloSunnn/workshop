import { Injectable } from '@angular/core';
import { IMov } from './imov';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { 

  }

  // onClick() {
  //   this.service.getMov().subscribe(res => {
  //     console.log(res)
  //   })
  // }

  getMov(movie:number): Observable<Array<IMov>> {
    return this.http.get<Array<IMov>>(`https://638492184ce192ac605bc39a.mockapi.io/Movie/${movie}`)
  }
}
