import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MealInfo, Meals, MealRicerca } from '../models/meals.model';

@Injectable({
  providedIn: 'root'
})
export class MealretriverService {

  private URL : string = "https://localhost:32769/api/Meals";

  constructor(private http:HttpClient) { }

  

  getMealInfo(choice: string): Observable<{message: string; mealInfo: MealInfo}> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<{ message: string; mealInfo: MealInfo }>(`${this.URL}/mealInfo?stringMeal=${choice}`, {}, { headers });
  }



  getMostSearched(choice: number): Observable<MealRicerca[]> {
    return this.http.post<MealRicerca[]>(`${this.URL}/mostSearched`, { choice });
  }


  getAllMeals(): Observable<MealRicerca[]> {
    return this.http.get<MealRicerca[]>(`${this.URL}/mealRicerca`);
  }
}

