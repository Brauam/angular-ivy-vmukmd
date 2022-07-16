import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formulario:FormGroup;

  constructor(private _formBuilder:FormBuilder){}

  ngOnInit(){
    this.formulario = this._formBuilder.group({
      campoTexto: new FormControl('', Validators.required),
      campoNumerico: new FormControl(0, Validators.required),
      datoSelector: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required),
    })
  }

}

