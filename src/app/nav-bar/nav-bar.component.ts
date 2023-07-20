import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user: any; // Declare the user object
  notativa = true;
  constructor() {
    // Initialize the user object
    this.user = {
      name: 'Maestro',
      avatarUrl: '' // Leave it empty if no profile picture is available
    };
  }

  isSearchOpen = false;
  searchQuery = '';

  openSearch() {
    this.isSearchOpen = true;
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchQuery = ''; // Clear the search query when closing the search box
  }
  notstatus(){
    this.notativa=!this.notativa;
  }
 //para emitir um evento de um componente a outro é preciso
  @Output() mostrarCard: EventEmitter<void> = new EventEmitter<void>(); //usar decorator output e declarar o evento
  cardVisivel: any = false;

  toggleCard(): any {
    this.cardVisivel = !this.cardVisivel;
    this.mostrarCard.emit(this.cardVisivel); //para que o evento possa voltar, no caso se eu quiser que o card suma com a mesma ação
    //preciso utilizar um metodo que vai enviar a emissão do evento sendo falso ou verdadeiro
  }

}
