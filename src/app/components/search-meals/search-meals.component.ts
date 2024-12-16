import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MealInfo } from '../../models/meals.model';
import { MealretriverService } from '../../services/mealretriver.service';


@Component({
  selector: 'app-search-meals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-meals.component.html',
  styleUrl: './search-meals.component.css'
})
export class SearchMealsComponent implements OnInit{

  ngOnInit(): void {
    console.log('Pagina caricata correttamente'); 
  }

  myMeal : MealInfo | undefined
  mealInput: any;

  constructor(private mealService: MealretriverService){
  }

  postMealInfo(): void {
    this.mealService.getMealInfo(this.mealInput).subscribe((data) =>{
      this.myMeal = data.mealInfo;
    })
  }
  
}
