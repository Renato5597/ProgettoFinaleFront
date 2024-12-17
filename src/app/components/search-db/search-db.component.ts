import { Component, OnInit } from '@angular/core';
import { MealInfo, MealRicerca } from '../../models/meals.model';
import { MealretriverService } from '../../services/mealretriver.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-db',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-db.component.html',
  styleUrl: './search-db.component.css'
})
export class SearchDBComponent implements OnInit{
  ngOnInit(): void {
    console.log('Pagina caricata correttamente'); 
  }

  constructor(private mealService: MealretriverService){  
  }

  listMeal: MealRicerca [] = []

  postDBInfo(): void {
    this.mealService.getAllMeals().subscribe((data) =>{
      this.listMeal = data;  
    });
  }
}
