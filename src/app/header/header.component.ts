import { Component,EventEmitter,Output } from '@angular/core';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls:['./header.component.css']
})

export class HeaderComponent {
	@Output() featureSelected = new EventEmitter<string>();

	selectedFeature(feature) {
		console.log(feature,"selectedFeature");
		this.featureSelected.emit(feature) ;
	}
}