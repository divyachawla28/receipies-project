import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
lookedFeature:string = 'receipe';
  onSelection(feature) {
  	console.log(feature,"onSelection");
  	if(feature == 'receipe') {
  		this.lookedFeature = 'receipe';
  	}else {
  		this.lookedFeature = 'shopping-list';
  	}
  }
}
