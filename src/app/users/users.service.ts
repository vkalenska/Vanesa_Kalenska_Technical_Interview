import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BACKEND_URL = 'https://jsonplaceholder.typicode.com';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${BACKEND_URL}/users`);
  }

  getPostsByUser(userId: any) {
    return this.http.get(`${BACKEND_URL}/posts?userId=${userId}`)
  }

  updateUser(userId: any, data: any) {
    return this.http.post(`${BACKEND_URL}/users`, data)
  }
}
