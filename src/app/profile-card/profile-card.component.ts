import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  userAvatar: any; // Declarando obj usuario
  notativa = true;
  constructor() {
    // Inicializando informações de usuarios
    this.userAvatar = {
      name: 'Maestro',
      avatarUrl: 'https://img.freepik.com/free-icon/user_318-644325.jpg?w=2000',
      email: 'example@hotmail.com',
      sociedades: ['petrolio brasileiro s.a.'],
      perfis: ['consultador de equipes', 'contratando']
       // Leave it empty if no profile picture is available

    };
  }
  avatarData:any = 
    {
      publicDocs: ['doc1', 'doc2', 'doc3'],
      ongoingDocs: ['doc4', 'doc5'],
      encaminhamentoDocs: ['doc6'],
      answerDocs: ['doc7', 'doc8']
    };
    @Input() exibir: boolean = false;
}
