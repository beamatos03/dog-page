import { Dog } from './dog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
  getRandomDog(): Observable<Dog>{
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random")  }
}
