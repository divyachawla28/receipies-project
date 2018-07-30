import { Component, OnInit } from '@angular/core';
import { Integredients } from '../shared/integredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	integredient: Integredients[] =[
	new Integredients('Butter', 280),
	new Integredients('Egg', 2)];

  constructor() { }

  ngOnInit() {
  }

}
