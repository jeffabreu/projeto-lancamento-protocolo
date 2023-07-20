import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor,Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-formulario-protocolo',
  templateUrl: './formulario-protocolo.component.html',
  styleUrls: ['./formulario-protocolo.component.css']
})
export class FormularioProtocoloComponent implements OnInit, OnDestroy{
  editorContent:any ='';
  editor: Editor = new Editor();
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  selectedNatureza: string = 'Interno';
}
