import { Component, OnInit } from '@angular/core';
import { MealretriverService } from '../../services/mealretriver.service';
import { MealRicerca } from '../../models/meals.model';

@Component({
  selector: 'app-most-searched',
  standalone: true,
  imports: [],
  templateUrl: './most-searched.component.html',
  styleUrl: './most-searched.component.css'
})
export class MostSearchedComponent implements OnInit{

  ngOnInit(): void {
    console.log('Pagina caricata correttamente'); 
  }

  constructor(private mealService: MealretriverService){
    
  }
  
  listMeals: MealRicerca []| undefined
  input : any
  
  postMostSearched(): void {
    this.mealService.getMostSearched(this.input).subscribe((data) =>{
      data.forEach(element => {
        this.listMeals?.push(element);
      });
    
    })
  }
  

}
