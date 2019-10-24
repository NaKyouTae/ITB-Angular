import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  serverUrl = "http://localhost:8080";
  constructor() { }
}
