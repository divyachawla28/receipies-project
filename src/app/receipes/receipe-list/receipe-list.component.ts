import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

	receipe: Receipe[] = [
	new Receipe('Test Receipe','This is test description',
		'https://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/12/vegan-masala-dosa-portion-800x1200-e1513122559576-1200x640.jpg'),
	new Receipe('Test Receipe 2','This is test description 2',
		'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
