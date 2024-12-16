import { Component, OnInit } from '@angular/core';
import { MealInfo, MealRicerca } from '../../models/meals.model';
import { MealretriverService } from '../../services/mealretriver.service';

@Component({
  selector: 'app-search-db',
  standalone: true,
  imports: [],
  templateUrl: './search-db.component.html',
  styleUrl: './search-db.component.css'
})
export class SearchDBComponent implements OnInit{
  ngOnInit(): void {
    console.log('Pagina caricata correttamente'); 
  }

  constructor(private mealService: MealretriverService){
  
  }

  listMeal: MealRicerca []| undefined


  postDBInfo(): void {
    this.mealService.getAllMeals().subscribe((data) =>{
      data.forEach(element => {
        this.listMeal?.push(element);
      });
    })
  }
}
