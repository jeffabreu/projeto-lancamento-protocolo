import { Component } from '@angular/core';

@Component({
  selector: 'app-central-acoes',
  templateUrl: './central-acoes.component.html',
  styleUrls: ['./central-acoes.component.css']
})
export class CentralAcoesComponent {
  panelOpenState = false;
   // Store the visibility of each accordion item
   accordionItemsVisible: { [key: number]: boolean } = {};

   toggleAccordionItem(itemNumber: number): void {
     // Toggle the visibility of the accordion item
     this.accordionItemsVisible[itemNumber] = !this.isItemVisible(itemNumber);
   }
 
   isItemVisible(itemNumber: number): boolean {
     // Return true if the accordion item is visible, otherwise false
     return this.accordionItemsVisible[itemNumber] || false;
   }
 }

