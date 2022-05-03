import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import Category from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = 'http://localhost:3000/api/category';

  constructor(private httpClient: HttpClient) { }

  private getOptions() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNjEwMDc4LCJleHAiOjE2NTc2MTAwNzh9.5QAk6xYJj3KQKp9Flft2z5s1q-vdnU647WeB8DZedHw"
    // const token = localStorage.getItem('token')

    return {
      headers: { 'Authorization': `Bearer ${token}` },
      // observe: 'response',
      // responseType: 'json'
    }
  }

  createCategory(category: Category){
    return this.httpClient.post(`${this.baseUrl}/add`, category, this.getOptions())
  }

  listCategory() {
    return this.httpClient.get(`${this.baseUrl}`,this.getOptions())
    .pipe(
      map((resposta: any) => resposta)
    )
  }

  deleteCategory(categoryId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${categoryId}`, this.getOptions())
  }

}
