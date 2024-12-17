import { Component, OnInit } from '@angular/core';
import { MealretriverService } from '../../services/mealretriver.service';
import { MealRicerca } from '../../models/meals.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-most-searched',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './most-searched.component.html',
  styleUrl: './most-searched.component.css'
})
export class MostSearchedComponent implements OnInit{

  ngOnInit(): void {
    console.log('Pagina caricata correttamente'); 
  }

  constructor(private mealService: MealretriverService){
    
  }
  
  listMeals: MealRicerca [] = [];
  inputNumber : number = 0;
  
  postMostSearched(): void {
    this.mealService.getMostSearched(this.inputNumber).subscribe((data) =>{
      this.listMeals = data;
    });
  }
  

}
